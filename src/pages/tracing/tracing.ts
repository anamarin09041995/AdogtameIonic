import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';
import { BrochurePage } from '../brochure/brochure';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-tracing',
  templateUrl: 'tracing.html'
})
export class TracingPage {

  nombre: string;
  imagen: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
     //storage.get("detail");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TracingPage');
  }



}
