import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { SessionService } from './session.service';
import { Apadrinado } from './seguimiento-service';
import { Observable } from 'rxjs/Observable';
import { URL } from '../app/app.config';

@Injectable()
export class EmailService {

  usuario: Apadrinado;

  constructor(public http: Http, public session: SessionService) {
    console.log('Hello EmailService Provider');
  }

  adoptar(){
    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);
     return this.http.post(URL + "/email", {email: this.session.email}, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });

  }
}
