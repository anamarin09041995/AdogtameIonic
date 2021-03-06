import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './login-service';
import { URL } from '../app/app.config';
import { TabsPage } from '../pages/tabs/tabs';

@Injectable()
export class RegisterService {

  constructor(public http: Http) { }


  signin(user: User) {

    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);

    return this.http.post(URL + "/users/signin", user, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }
}
