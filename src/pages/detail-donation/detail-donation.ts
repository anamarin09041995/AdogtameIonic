import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DonationsPage} from '../donations/donations';

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
  selectedvalue: number;
  items: Array<{ value: number}> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDonationPage');
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.telefono = this.navParams.get("telefono");
    this.direccion = this.navParams.get("direccion");
    this.descripcion = this.navParams.get("descripcion");

    this.items.push({value:10000});
    this.items.push({value:20000});
    this.items.push({value:30000});
    this.items.push({value:40000});
  }

  donar() {
    console.log(this.selectedvalue);
    let confirm = this.alertCtrl.create({
      title: '¡Muchas gracias por donar a ' + this.nombre,
      message: 'Va a donar '+ this.selectedvalue +' destinados a ' + (this.alimento ? 'alimento ' : '') + (this.salud ? 'e implementos de salud y aseo' : ''),
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


