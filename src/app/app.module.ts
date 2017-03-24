import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule} from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { BrochurePage } from '../pages/brochure/brochure';
import { DonationsPage } from '../pages/donations/donations';
import { VoluntaryPage } from '../pages/voluntary/voluntary';
import { TracingPage } from '../pages/tracing/tracing';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailBrochurePage } from '../pages/detail-brochure/detail-brochure';

import { UtilService } from '../providers/util-service';
import { MascotaData } from '../providers/mascota-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    VoluntaryPage,
    DonationsPage,
    TracingPage,
    TabsPage,
    BrochurePage,
    DetailBrochurePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    VoluntaryPage,
    DonationsPage,
    TracingPage,
    TabsPage,
    BrochurePage,
    DetailBrochurePage
  ],
  providers: 
  [{provide: ErrorHandler, useClass: IonicErrorHandler }, UtilService, MascotaData]
})
export class AppModule {}
