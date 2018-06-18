import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpService } from "./http.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  public user= {name: '', email: ''};
  refreshTime = 0;

  constructor(private httpService: HttpService) {
    const user = sessionStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user);
    }
  }

  getUser() {
    if (this.refreshTime == 0 || this.refreshTime - Date.now() > 60000) {
      return this.refreshUser();
    } else {
      return of(this.user);
    }
  }

  refreshUser() {
    return this.httpService.getData('user')
        .map(
          (result: any) => {
            if(result.user){
              this.user = result.user;
              sessionStorage.setItem('user', JSON.stringify(this.user));
              return this.user;
            }
          })
        .catch((error) => {
            return Observable.throw(error);
          }
        );
  }
}
