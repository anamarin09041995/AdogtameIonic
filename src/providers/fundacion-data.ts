import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { URL } from '../app/app.config';

@Injectable()
export class FundacionData {

  data: Fundacion[];

  constructor(public http: Http) {}

  all(): Observable<Fundacion[]> {
    return this.http.get(URL + "/fundaciones").map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }
}

export class Fundacion{
  nombre: string;
  direccion: string;
  telefono: number;
  descripcion:string;
  imagen: string;
  horario: string;
}
