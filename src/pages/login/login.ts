import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

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
  
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController){}

  loading(){
    let loader = this.loadingCtrl.create({
      content: "Procesando",
      duration: 2000
    });
    loader.present();      
  }

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }

  login(){
    this.navCtrl.push(HomePage);
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
