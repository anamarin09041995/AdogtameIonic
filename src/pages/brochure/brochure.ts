import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { Mascota, MascotaData} from '../../providers/mascota-data';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';
import { TracingPage} from '../tracing/tracing';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { SessionService } from "../../providers/session.service";
import { MascotaSelected } from "../../providers/mascota-selected";

@Component({
  selector: 'page-brochure',
  templateUrl: 'brochure.html'
})
export class BrochurePage {
  
  mascotas: Mascota[];

  constructor(public navCtrl: NavController, 
              public storage: Storage, 
              public navParams: NavParams, 
              public service: MascotaData, 
              public events: Events,
              public session: SessionService,
              public selected: MascotaSelected) {
    this.mascotas = [];    
  }

  goToDetail(index:  number){
      this.selected.selected = this.mascotas[index];
      this.events.publish("nav:detail");
  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
    this.storage.set("logged", false);
  }

  ionViewDidLoad() {
    this.service.all().subscribe(data => this.mascotas = data);
  }
}

