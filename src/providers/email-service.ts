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
    const body = {email: this.session.email}
     return this.http.post(URL + "/email", body, options).map((response) => {
      console.log(body);
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });

  }
    // const body = {
    //   from: '<anamarin@unicauca.edu.co>',
    //   to: this.session.email,
    //   subject: 'Formato de adopcion',
    //   text: 'Gracias por ser parte del cambio',
    //   html: '<p>Formato de adopcion</p>',
    // };
    // console.log(body);
   

}