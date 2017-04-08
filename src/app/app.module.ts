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
import { DetailDonationPage } from '../pages/detail-donation/detail-donation';

import { LoginService } from '../providers/login-service';
import { MascotaData } from '../providers/mascota-data';
import { FundacionData } from '../providers/fundacion-data';
import { RegisterService } from '../providers/register-service';
import { DonacionesService } from '../providers/donaciones-service';
import { SeguimientoService } from '../providers/seguimiento-service';
import { SessionService } from '../providers/session.service';


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
    DetailBrochurePage,
    DetailDonationPage, 
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
    DetailBrochurePage,
    DetailDonationPage,
  ],
  providers: 
  [{provide: ErrorHandler, useClass: IonicErrorHandler },SeguimientoService, MascotaData, FundacionData, LoginService, RegisterService, DonacionesService, SessionService]
})
export class AppModule {}
