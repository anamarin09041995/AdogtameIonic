import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { UtilService } from '../../providers/util-service';

import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  pass: string;
  
  constructor(public navCtrl: NavController, public loading: UtilService, public storage: Storage){
    
  }

  createAccount(){
    this.loading.showloading();
    this.navCtrl.push(RegisterPage);
  }

  goToBrochure(){
    let data = {email:this.email, pass:this.pass}
    this.storage.set("logged", true );
    this.storage.set("user", JSON.stringify(data));
    this.loading.showloading();
    this.navCtrl.push(TabsPage);
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
