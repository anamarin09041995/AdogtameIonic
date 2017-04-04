import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { URL } from '../app/app.config';
import { Mascota } from './mascota-data';

@Injectable()
export class SeguimientoService {

  constructor(public http: Http) {}

  all(): Observable<Mascota[]> {
    return this.http.get(URL + "/seguimiento").map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  apadrinar(nombre: string, imagen: string, descripcion: string) {

    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);
    const body = {nombre: nombre, imagen: imagen, descripcion: descripcion};
    return this.http.post(URL + "/seguimiento", body, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });
  }

}