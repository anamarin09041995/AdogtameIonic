import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Mascota, MascotaData} from '../../providers/mascota-data';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';
import { TracingPage} from '../tracing/tracing';
import { Storage } from '@ionic/storage';
import { SessionService } from "../../providers/session.service";

@Component({
  selector: 'page-brochure',
  templateUrl: 'brochure.html'
})
export class BrochurePage {
  
  index1: number;
  mascotas: Mascota[];

  constructor(public navCtrl: NavController, 
              public storage: Storage, 
              public navParams: NavParams, 
              public service: MascotaData, 
              public events: Events,
              public session: SessionService) {
    this.mascotas = [];
    
  }

  goToDetail(index:  number){
    this.storage.set("index", index).then(() => {
      console.log(index);
          this.storage.get("index").then(val => {
            console.log(val);
            this.session.index = val;
            console.log(this.session.index);
          });
        });
     this.events.publish("nav:tracing");
    //  this.navCtrl.push(DetailBrochurePage, {nombre: this.mascotas[index].nombre, imagen: this.mascotas[index].imagen, fundacion: this.mascotas[index].fundacion,
    //                    contacto: this.mascotas[index].contacto, descripcion: this.mascotas[index].descripcion});
  }

  ionViewDidLoad() {
    this.service.all().subscribe(data => this.mascotas = data);
  }
}

