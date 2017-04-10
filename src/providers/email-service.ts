import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SessionService } from './session.service';
import { Apadrinado } from './seguimiento-service';

@Injectable()
export class EmailService {

  usuario: Apadrinado;

  constructor(public http: Http) {
    console.log('Hello EmailService Provider');
  }

  adoptar(){

  }

}
