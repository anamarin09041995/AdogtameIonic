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
    //  this.storage.set("tracing", this.session.data1).then(() => {
    //     this.storage.get("tracing").then(val => console.log(val))});

    this.storage.get("detail").then(val => {
          this.session.data1 = val
          console.log(this.session.data1);
        });
  }

  ionViewDidLoad() {
    this.service.all().subscribe(data => this.mascotas = data);
  }
}
