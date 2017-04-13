import { Component } from '@angular/core';
import { NavController, NavParams, Events, Nav } from 'ionic-angular';

import { TracingPage } from '../tracing/tracing';
import { BrochurePage } from '../brochure/brochure';
import { VoluntaryPage } from '../voluntary/voluntary';
import { DonationsPage } from '../donations/donations';
import { DetailBrochurePage } from '../detail-brochure/detail-brochure';

import { Storage } from '@ionic/storage';
import { SessionService } from "../../providers/session.service";
import { Mascota, MascotaData } from "../../providers/mascota-data";

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
  brochure: BrochurePage;


  constructor(public navCtrl: NavController,
    public nav: Nav,
    public navParams: NavParams,
    public storage: Storage,
    public session: SessionService,
    public events: Events,
    public service: MascotaData) {

    this.mascotas = [];
    this.service.all().subscribe(data => this.mascotas = data);
    
    events.subscribe("nav:tracing", () => {
      this.storage.get("index").then(val => {
            console.log(val);
            this.session.index = val;
            console.log(this.session.index);
          });
      //console.log(this.session.index);
      ///this.navCtrl.push(DetailBrochurePage, { nombre: this.mascotas[this.session.index].nombre });
      // this.navCtrl.push(DetailBrochurePage, {nombre: this.mascotas[index].nombre, imagen: this.mascotas[index].imagen, fundacion: this.mascotas[index].fundacion,
      //                 contacto: this.mascotas[index].contacto, descripcion: this.mascotas[index].descripcion});
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
