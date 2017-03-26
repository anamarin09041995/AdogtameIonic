import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
  descripcion: string;
  imagen: string;
  value: string;
  alimento: boolean;
  salud: boolean;
  items: Array<{text: string, checked: boolean}> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDonationPage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.telefono = this.navParams.get("telefono");
    this.direccion = this.navParams.get("direccion");
    this.descripcion = this.navParams.get("descripcion");

    this.items.push({text: '10000', checked: false});
    this.items.push({text: '20000', checked: false});
    this.items.push({text: '30000', checked: false});
    this.items.push({text: '40000', checked: false});
  }

  donar() {
    let confirm = this.alertCtrl.create({
      title: '¡Muchas gracias por donar a ' + this.nombre,
      message: 'Va a donar destinados a ' + (this.alimento ? 'alimento ' : '') + (this.salud ? 'e implementos de salud y aseo' : ''),
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Cancelado');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            if(this.alimento == true){
              
            }
            console.log('De acuerdo');
          }
        }
      ]
    });
    confirm.present();
  }

}


