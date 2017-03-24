import { Component,Input } from '@angular/core';
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
    this.navCtrl.parent.push(DetailBrochurePage, {nombre: this.mascotas[index].nombre, imagen: this.mascotas[index].imagen});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BrochurePage');
  }
}

