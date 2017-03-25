import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Fundacion, FundacionData } from '../../providers/fundacion-data';
import { DetailDonationPage } from '../detail-donation/detail-donation';

@Component({
  selector: 'page-donations',
  templateUrl: 'donations.html'
})
export class DonationsPage {

  fundaciones: Fundacion[];

  constructor(public navCtrl: NavController, public service: FundacionData) {
    this.fundaciones = this.service.data;
  }

goToDetail(index:  number){
    this.navCtrl.push(DetailDonationPage, {nombre: this.fundaciones[index].nombre, direccion: this.fundaciones[index].direccion, telefono: this.fundaciones[index].telefono,
                      imagen: this.fundaciones[index].imagen, descripcion: this.fundaciones[index].descripcion});
  }

}
