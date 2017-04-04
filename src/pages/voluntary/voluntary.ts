import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Fundacion, FundacionData } from '../../providers/fundacion-data';

@Component({
  selector: 'page-voluntary',
  templateUrl: 'voluntary.html'
})
export class VoluntaryPage {

  fundaciones: Fundacion[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public service: FundacionData) {
    this.fundaciones = [];
  }

  ionViewDidLoad() {
    this.service.all().subscribe(data => this.fundaciones = data);
  }

  confirm(index: number){
    let alert = this.alertCtrl.create({
      title: '¡Muchas gracias por ser voluntario en '+ this.fundaciones[index].nombre + '!',
      subTitle: 'Nuestros horarios disponibles son: ' + this.fundaciones[index].horario,
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
