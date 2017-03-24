import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DetailBrochureService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DetailBrochureService {

  constructor(public http: Http) {
    console.log('Hello DetailBrochureService Provider');
  }

}

export class DetailBrochure{
  fundacion: string;
  descripcion: string;
}
