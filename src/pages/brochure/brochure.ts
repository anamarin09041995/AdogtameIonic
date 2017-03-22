import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Mascota, MascotaData} from '../../providers/mascota-data';

/*
  Generated class for the Brochure page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brochure',
  templateUrl: 'brochure.html'
})
export class BrochurePage {

  mascotas: Mascota[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: MascotaData) {
    this.mascotas = this.service.data;
  }

  goToDetail(){
    //this.navCtrl.push(DetailPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BrochurePage');
  }

}

