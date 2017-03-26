import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FundacionData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class FundacionData {

  data: Fundacion[];

  constructor() {
    this.loadData();
    console.log('Hello FundacionData Provider');
  }

  loadData(){
    this.data = [
      {nombre: 'Igualdad animal', direccion: 'Avenida Panamericada # 6-35', telefono:3124457879, imagen: '../assets/img/igualdadanimal.jpg', descripcion:'Se requieren personas dispuestas a colaborar en labores como el baño de las mascotas, incluyendo sus camas y cobijas' },
      {nombre: 'Amigos del planeta', direccion: 'Carrera 9 # 8-04', telefono:3014563214, imagen:'../assets/img/amigosdelplaneta.png', descripcion: 'Se requieren personas que tengan disponibilidad para ayudar en la distribucion de las alcancias en pro de la fundacion'},
      {nombre: 'Morris Animal', direccion: 'Calle 4 # 67N-44', telefono:3143347765, imagen: '../assets/img/morrisanimal.jpg', descripcion: 'Se requieren personas dispuestas a colaborar en los eventos proximos de adopcion promoviendo dichos eventos'},
      {nombre: 'Si a la paz con los animales', direccion: 'Avenida Panamericada # 9-03', telefono:3175568976, imagen:'../assets/img/sialapazanimal.jpg', descripcion: 'Se requieren personas dispuestas a pasear a las mascotas durante aproximadamente una hora'},

    ];
  }

}

export class Fundacion{
  nombre: string;
  direccion: string;
  telefono: number;
  descripcion:string;
  imagen: string;
}
