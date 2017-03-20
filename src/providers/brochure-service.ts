import { Injectable } from '@angular/core';
import { Mascota } from '../pages/brochure/shared-brochure/brochure-model';

@Injectable()
export class mascotasService{

    mascotas: Mascota[];

    constructor(){
         this.mascotas = [];

         this.mascotas.push({nombre:"Toby", edad: "6 meses", raza: "Pitbull", tamanio: "Mediano", imagen:'assets/img/mascota1'});
         this.mascotas.push({nombre:"Toby", edad: "6 meses", raza: "Pitbull", tamanio: "Mediano", imagen:'assets/img/mascota1'});
         this.mascotas.push({nombre:"Toby", edad: "6 meses", raza: "Pitbull", tamanio: "Mediano", imagen:'assets/img/mascota1'});

    }
}
