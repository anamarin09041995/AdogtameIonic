import { Injectable } from '@angular/core';

@Injectable()
export class MascotaData {

  data: Mascota[]

  constructor() {
    this.loadData()
  }

  loadData() {
    this.data = [
      { nombre: 'Lucas', edad:'3 meses', raza: 'Pitbull', tamanio:'Mediano', imagen: '../assets/img/mascota1.jpg'},
      { nombre: 'Tango', edad:'3 meses', raza: 'Pitbull', tamanio:'Pequeño', imagen: '../assets/img/mascota2.jpg'},
      { nombre: 'Luna', edad:'3 meses', raza: 'Pitbull', tamanio:'Pequeño', imagen: '../assets/img/mascota3.jpg'},
      { nombre: 'Nacho', edad:'3 meses', raza: 'Pitbull', tamanio:'Mediano', imagen: '../assets/img/mascota4.jpg'},      
    ];
  }

}

export class Mascota {
  nombre: string;
  edad: string;
  raza: string;
  tamanio: string;
  imagen: string;
}

