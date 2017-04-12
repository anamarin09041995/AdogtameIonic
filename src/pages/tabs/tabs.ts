import { Component } from '@angular/core';
import { NavController, NavParams, Events, Nav } from 'ionic-angular';

import { TracingPage } from '../tracing/tracing';
import { BrochurePage } from '../brochure/brochure';
import { VoluntaryPage } from '../voluntary/voluntary';
import { DonationsPage } from '../donations/donations';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';

import { Storage } from '@ionic/storage';
import { SessionService } from "../../providers/session.service";
import { Mascota } from "../../providers/mascota-data";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = BrochurePage;
  tab2Root: any = DonationsPage;
  tab3Root: any = TracingPage;
  tab4Root: any = VoluntaryPage;
  mascotas: Mascota[];
  

  constructor(public navCtrl: NavController,
              public nav: Nav, 
              public navParams: NavParams, 
              public storage: Storage, 
              public session:SessionService,
              public events: Events) {
    
    events.subscribe("nav:tracing", (index) => {
      console.log(index);
       //this.navCtrl.push(DetailBrochurePage,{nombre: this.mascotas[index[index]]});
      // this.navCtrl.push(DetailBrochurePage, {nombre: this.mascotas[index[0]].nombre, imagen: this.mascotas[index[1]].imagen, fundacion: this.mascotas[index[2]].fundacion,
      //                 contacto: this.mascotas[index[3]].contacto, descripcion: this.mascotas[index[4]].descripcion});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
