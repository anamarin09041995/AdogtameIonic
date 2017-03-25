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
  descripcion:string;
  imagen: string;
  value: string;
  alimento: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDonationPage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.telefono = this.navParams.get("telefono");
    this.direccion = this.navParams.get("direccion");
    this.descripcion = this.navParams.get("descripcion");
  }

  isChecked(){
      console.log(this.alimento);
      //  if(checked==true){
      //     console.log('El valor es '+ v);
      //  }
    }

     donar(){
     let confirm = this.alertCtrl.create({
      title: '¡Muchas gracias por donar a '+ this.nombre,
      message: 'Va a donar 10000 destinados a ' + this.alimento ? 'alimento' : '',
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
            console.log('De acuerdo');
          }
        }
      ]
    });
    confirm.present();
  }

  }


