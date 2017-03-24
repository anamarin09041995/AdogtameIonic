import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Mascota, MascotaData} from '../../providers/mascota-data';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';

@Component({
  selector: 'page-brochure',
  templateUrl: 'brochure.html'
})
export class BrochurePage {
  

  mascotas: Mascota[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MascotaData) {
    this.mascotas = this.service.data;
  }

  goToDetail(index:  number){
    this.navCtrl.push(DetailBrochurePage, {nombre: this.mascotas[index].nombre, imagen: this.mascotas[index].imagen, fundacion: this.mascotas[index].fundacion,
                      contacto: this.mascotas[index].contacto, descripcion: this.mascotas[index].descripcion});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BrochurePage');
  }
}

