import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Events, Nav, Tabs } from 'ionic-angular';

import { TracingPage } from '../tracing/tracing';
import { LoginPage } from '../login/login';
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

  @ViewChild("tabs") tabs: Tabs;

  tab1Root: any = BrochurePage;
  tab2Root: any = DonationsPage;
  tab3Root: any = TracingPage;
  tab4Root: any = VoluntaryPage;
  tab5Root: any = LoginPage;
  mascotas: Mascota[];


  constructor(public navCtrl: NavController,
    public nav: Nav,
    public navParams: NavParams,
    public storage: Storage,
    public session: SessionService,
    public events: Events,
    public service: MascotaData) {

    this.events.subscribe("nav:detail", () => {
      this.goToDetail();
    });
    this.events.subscribe("nav:tracing", () => {
      this.goToTracing();
    });
  }
  
  logout(){
/*    this.navCtrl.setRoot(LoginPage);*/
    this.storage.set("logged", false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  goToDetail(){
    this.navCtrl.push(DetailBrochurePage);
  }

  goToTracing(){
    this.tabs.select(2);
  }
}
