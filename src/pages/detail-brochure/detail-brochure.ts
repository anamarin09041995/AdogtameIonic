import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detail-brochure',
  templateUrl: 'detail-brochure.html'
})
export class DetailBrochurePage {

  nombre: string;
  imagen: string;
  fundacion: string;
  contacto: number;
  descripcion: string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBrochurePage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.fundacion = this.navParams.get("fundacion");
    this.contacto = this.navParams.get("contacto");
    this.descripcion = this.navParams.get("descripcion");
  }

  adoptar(){
        alert("");
    }

  apadrinar(){

  }

}