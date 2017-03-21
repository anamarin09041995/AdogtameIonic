import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { UtilService } from '../../providers/util-service';
import { BrochurePage } from '../brochure/brochure';

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
  
  constructor(public navCtrl: NavController, public loading: UtilService){
    
  }

  createAccount(){
    this.loading.showloading();
    this.navCtrl.push(RegisterPage);
  }

  goToBrochure(){
    this.loading.showloading();
    this.navCtrl.push(BrochurePage);
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
