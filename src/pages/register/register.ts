import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';


/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  city: string;
  email: string;
  pass: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {}
  
   login(){
    this.navCtrl.push(HomePage);
  }

  loading(){
    let loader = this.loadingCtrl.create({
      content: "Procesando",
      duration: 2000
    });
    loader.present();      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
