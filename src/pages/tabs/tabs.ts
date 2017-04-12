import { Component } from '@angular/core';
import { NavController, NavParams, Events, Nav } from 'ionic-angular';

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
              public nav: Nav, 
              public navParams: NavParams, 
              public storage: Storage, 
              public session:SessionService,
              public events: Events) {
    
    events.subscribe("nav:tracing", () => {
      this.navCtrl.push(TracingPage);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
}
