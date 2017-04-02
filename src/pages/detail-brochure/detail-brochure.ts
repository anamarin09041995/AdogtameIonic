import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { BrochurePage} from '../brochure/brochure';
import { TracingPage } from '../tracing/tracing';
import { Storage } from '@ionic/storage';


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


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.fundacion = this.navParams.get("fundacion");
    this.contacto = this.navParams.get("contacto");
    this.descripcion = this.navParams.get("descripcion");

    let data1 = {nombre:this.nombre, imagen:this.imagen, contacto: this.contacto}
    //this.storage.set("selected", true );
    //this.storage.set("detail", JSON.stringify(data1));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBrochurePage');
  }

  adoptar() {
    let alert = this.alertCtrl.create({
      title: '¡Muchas gracias por adoptar a '+ this.nombre,
      subTitle: 'Nos comunicaremos mediante un correo para detallar el proceso de adopción',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.pop(BrochurePage);
  }

  apadrinar() {
    this.navCtrl.push(TracingPage);
  }

}
