import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';
import { BrochurePage } from '../brochure/brochure';
import { Storage } from '@ionic/storage';
import { Mascota } from '../../providers/mascota-data';
import { SeguimientoService } from '../../providers/seguimiento-service';


@Component({
  selector: 'page-tracing',
  templateUrl: 'tracing.html'
})
export class TracingPage {

  nombre: string;
  imagen: string;
  mascotas: Mascota[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public service
  :SeguimientoService ) {
     storage.get("detail").then(val =>{
       JSON.parse(val);
       console.log(val);
     });
     this.mascotas = [];
  }

  ionViewDidLoad() {
    this.service.all().subscribe(data => this.mascotas = data);
  }
}
