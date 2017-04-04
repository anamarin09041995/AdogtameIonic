import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { URL } from '../app/app.config';

@Injectable()
export class MascotaData {

  constructor(public http: Http) {}

  all(): Observable<Mascota[]> {
    return this.http.get(URL + "/mascotas").map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

}

export class Mascota {
  nombre: string;
  edad: string;
  raza: string;
  tamanio: string;
  imagen: string;
  fundacion: string; 
  descripcion: string;
  contacto: number;
}

