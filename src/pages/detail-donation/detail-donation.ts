import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the DetailDonation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-donation',
  templateUrl: 'detail-donation.html'
})
export class DetailDonationPage {

  nombre: string;
  direccion: string;
  telefono: number;
  descripcion:string;
  imagen: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDonationPage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.telefono = this.navParams.get("telefono");
    this.direccion = this.navParams.get("direccion");
    this.descripcion = this.navParams.get("descripcion");
  }

}
