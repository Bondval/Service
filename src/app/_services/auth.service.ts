import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { catchError, map, defaultIfEmpty } from 'rxjs/operators';
import { pipe } from 'rxjs/util/pipe';
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {async} from "rxjs/scheduler/async";

@Injectable()
export class AuthService {
  server = 'http://serviceman.testprojects.net/api/'; //'http://sems.testprojects.net/api/v1/';
  token = '';
  public isLoginSubject = new BehaviorSubject<boolean>(false);
  constructor(private injector: Injector, private _router: Router) {
    this.token = localStorage.getItem('token');
  }

  login(email, password, remember_me = false): Observable<true|ErrorObservable> {

    let http = this.injector.get(HttpClient);

    return http.post(this.server + 'login', {email: email, password: password}, {observe: 'response'})
        .pipe(
            map( (response: HttpResponse<any>) => {
              if (response && response.body.token) {
                this.setAuthorizationToken(response.body.token);
                this.isLoginSubject.next(true);

                if (remember_me) {
                  localStorage.setItem('user.email', email);
                  localStorage.setItem('user.password', password);
                }
                return true;
              } else {
                return Observable.throw('Unknown error occurred');
              }
            }),
            catchError( (error: any) => {
              return Observable.throw(error);
            })
        );
  }

  public logout(): void {
    this.token = null;
    localStorage.removeItem('token');
    this.isLoginSubject.next(false);
  }

  signup(data): Observable<boolean> {

    let http = this.injector.get(HttpClient);

    return http.post(this.server + 'signup', data, {observe: 'response'})
        .pipe(
            map( (response: HttpResponse<any>) => {
              let token = response && response.body.token;
              if (token) {
                this.token = token;
                localStorage.setItem('token', token);
                this.isLoginSubject.next(true);
                if(data.remember_me) {
                  localStorage.setItem('user.email', data.email);
                  localStorage.setItem('user.password', data.password);
                }
                return true;
              } else {
                return false;
              }
            },
            ( error: any ) => { return Observable.throw(error); })
        );
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  public isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  public getAuthorizationHeader () {
    if (this.isLoggedIn()) {
      return 'Bearer ' + this.token;
    } else {
      return '';
    }

  }

  public setAuthorizationToken (token: string) {
    if (token) {
      this.token = token.indexOf('Bearer ') > -1 ? token.substring(7) : token;
      localStorage.setItem('token', this.token);
    } else {
      this.token = null;
      localStorage.removeItem('token');
    }
  }

  public loginWithSavedCredentials() {
    const email = localStorage.getItem('user.email');
    const password = localStorage.getItem('user.password');
    if(!email || !password) {
      if (window.location.pathname != '/login') {
        sessionStorage.setItem('redirect', window.location.pathname);
      }
      this._router.navigate(['login']);
      return Observable.empty();
    } else {
      return this.login(email, password).map((res) => {
        if(!res) {
          if(window.location.pathname != '/login')
            sessionStorage.setItem('redirect', window.location.pathname);
          this._router.navigate(['login']);
          return Observable.empty();
        } else {
          return true;
        }
      });
    }

  }
}