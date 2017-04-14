import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';
import { BrochurePage } from '../brochure/brochure';
import { Storage } from '@ionic/storage';
import { Mascota } from '../../providers/mascota-data';
import { SeguimientoService } from '../../providers/seguimiento-service';
import { SessionService } from '../../providers/session.service';


@Component({
  selector: 'page-tracing',
  templateUrl: 'tracing.html'
})
export class TracingPage {

  nombre: string;
  imagen: string;
  mascotas: Mascota[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public storage: Storage,
              public service :SeguimientoService,
              public session : SessionService ) {
     this.mascotas = [];
     this.doRefresh(0);
  }

  ionViewDidLoad() {
    this.service.all().subscribe(data => { 
      this.mascotas = data;
      this.storage.set("tracing", data);
    },err => {
      this.storage.get("tracing").then(val => this.mascotas = val);
    });
  }

  doRefresh(refresher) {
    this.service.all().subscribe(data => {
      this.mascotas = data;
      if(refresher != 0){
      refresher.complete();
      }
    }); 
  }
}
