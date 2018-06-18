import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders,
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ObservableInput } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
import { pipe } from 'rxjs/util/pipe';
import { AuthService } from './auth.service';
import 'rxjs/add/observable/throw';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  constructor(private AuthService: AuthService, private _router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newHeaders = {};

    if(!req.headers.get('Content-Type')) {
      newHeaders['Content-Type'] = 'application/json;charset=utf-8';
    }

    const authHeader = this.AuthService.getAuthorizationHeader();
    if(authHeader) {
      newHeaders['Authorization'] = authHeader;
    }

    const newReq = req.clone({
      setHeaders: newHeaders
    });


    return next.handle(newReq).pipe(
        map(
            (resp: any) => {
              if (resp instanceof HttpResponse){
                const newTokenHeader = resp.headers.get('Authorization');
                if (newTokenHeader) {
                  this.AuthService.setAuthorizationToken(newTokenHeader);
                }
              }
              return resp;
            }),
        catchError(
            (err):ObservableInput<any> => {
              if (err.status == 401 && String(window.location.href).indexOf('/login') !== -1) {
                sessionStorage.setItem('redirect', window.location.pathname);
                this._router.navigate(['login']);
                return Observable.empty();
              } else {
                return Observable.throw(err);
              }
            }
          )
    );
  }
}

@Injectable()
export class HttpService {
  server = 'http://serviceman.testprojects.net/api/'; //'http://sems.testprojects.net/api/v1/';

  constructor( private http: HttpClient, private _router: Router) {

  }

  getData(url, params = null):Observable<any> {
    let query = '';
    if (params && typeof params == 'object') {
      for(let i of Object.getOwnPropertyNames(params)){
        query = query + (query.length == 0 ? '?' : '&') + encodeURIComponent(i) + '=' + encodeURIComponent(params[i]);
      }
    }
    return this.http.get(this.server + url + query, {observe: 'response'}).map( res => res.body);
  }

  getDataFile(file):Observable<any> {
    return this.http.get(file);
  }

  postData(url, data):Observable<any> {
    return this.http.post(this.server + url, data, {observe: 'response'}).map( res => res.body);
  }

  putData(url, data):Observable<any> {
    return this.http.put(this.server + url, data, {observe: 'response'}).map( res => res.body);
  }

  patchData(url, data):Observable<any> {
    return this.http.patch(this.server + url, data, {observe: 'response'}).map( res => res.body);
  }

  delData(url):Observable<any> {
    return this.http.delete(this.server + url, {observe: 'response'}).map( res => res.body);
  }

}