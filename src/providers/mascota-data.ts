import { Injectable } from '@angular/core';

@Injectable()
export class MascotaData {

  data: Mascota[]

  constructor() {
    this.loadData()
  }

  loadData() {
    this.data = [
      { nombre: 'Lucas', edad:'1 año', raza: 'Pitbull', tamanio:'Mediano', imagen: '../assets/img/mascota1.jpg',fundacion: 'Vida animal', contacto: 3124457879, descripcion: 'Lucas fue recogido cuando se encontraba en poder de una familia que lo maltrataba. Ha estado en recuperacion y ahora está disponible para estar con una familia que le brinde amor ' },
      { nombre: 'Tango', edad:'6 meses', raza: 'Criollo', tamanio:'Pequeño', imagen: '../assets/img/mascota2.jpg',fundacion: 'Animal safe', contacto: 3175568976, descripcion: 'Este cachorrito nacio como producto del embarazo de Milagros, una peludita acogida en la fundación. Es muy tierno y jugueton, le encanta morder y recibir cariño. Hazlo  Feliz!'},
      { nombre: 'Luna', edad:'2 meses', raza: 'Beagle', tamanio:'Pequeño', imagen: '../assets/img/mascota3.jpg',fundacion: 'Paz animal', contacto: 3014563214, descripcion: 'Este cachorrito nacio como producto del embarazo de Milagros, una peludita acogida en la fundación. Es muy tierno y jugueton, le encanta morder y recibir cariño. Hazlo  Feliz!'},
      { nombre: 'Nacho', edad:'3 años', raza: 'Criollo', tamanio:'Mediano', imagen: '../assets/img/mascota4.jpg',fundacion: 'Sí a la paz con los animales', contacto: 3143347765,descripcion: 'Nacho fue recogido cuando se encontraba en poder de una familia que lo maltrataba. Ha estado en recuperacion y ahora está disponible para estar con una familia que le brinde amor'},      
    ];
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

