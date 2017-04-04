import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URL } from '../app/app.config';

@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  login(email: string, password: string): Observable<{success: boolean, user: any}>{

    let contentType = new Headers({"Content-Type":"application/json"});
    let options = new RequestOptions(contentType);

    const  body = {email: email, password: password};
    return this.http.post( URL + "/users/login", body, options).map((response) => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }
}

export class User{
  email: string;
  password: string;
  city: string;
}
