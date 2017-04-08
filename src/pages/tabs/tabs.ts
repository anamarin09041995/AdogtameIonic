import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { TracingPage } from '../tracing/tracing';
import { BrochurePage } from '../brochure/brochure';
import { VoluntaryPage } from '../voluntary/voluntary';
import { DonationsPage } from '../donations/donations';

import { Storage } from '@ionic/storage';
import { SessionService } from "../../providers/session.service";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = BrochurePage;
  tab2Root: any = DonationsPage;
  tab3Root: any = TracingPage;
  tab4Root: any = VoluntaryPage;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public storage: Storage, 
              public session:SessionService,
              public events: Events) {
    storage.get("email").then(val => this.session.email = val);
    storage.get("id").then(val => this.session.id = val);
   // events.subscribe("db:ready",this.goToApadrinar);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  // goToApadrinar(){
  //   this.navCtrl.push(TracingPage);
  // }

}
