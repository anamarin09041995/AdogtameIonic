import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { URL } from '../app/app.config';
import { Mascota } from './mascota-data';
import { SessionService } from './session.service';

@Injectable()
export class SeguimientoService {

  constructor(public http: Http, public storage: Storage, public session: SessionService) { }

  all(): Observable<Mascota[]> {
    return this.http.get(URL + "/seguimiento/" + this.session.id).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  verificarMascota(nombre: string): Observable<Apadrinado> {
    return this.http.get(URL + "/seguimmiento/" + this.session.id + "/mascota/" + nombre).map(response => {
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }

  apadrinar(nombre: string, imagen: string, descripcion: string): Observable<{ success: boolean }> {

    let contentType = new Headers({ "Content-Type": "application/json" });
    let options = new RequestOptions(contentType);
    const body = { nombre: nombre, imagen: imagen, descripcion: descripcion, usuario: { id: this.session.id, email: this.session.email } };
    return this.http.post(URL + "/seguimiento", body, options).map((response) => {
      return response.json();
    }).catch((err) => {
      return Observable.throw(err);
    });


  }

}

export class Apadrinado {
  nombre: string;
  descripcion: string;
  imagen: string;
  usuario: { id: string, email: string };
}