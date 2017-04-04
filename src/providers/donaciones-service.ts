import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URL } from '../app/app.config';
import { TabsPage } from '../pages/tabs/tabs';

@Injectable()
export class DonacionesService {

  constructor(public http: Http) { }


  addDonation(value: number, alimento: boolean, salud:boolean) {

    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);
    const body = {value: value, alimento: alimento, salud: salud}
    return this.http.post(URL + "/donaciones",body, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }
}
