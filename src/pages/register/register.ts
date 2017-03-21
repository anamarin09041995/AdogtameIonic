import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UtilService } from '../../providers/util-service';


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


  constructor(public navCtrl: NavController, public navParams: NavParams, public loading: UtilService) {}
  
  goToBrochure(){
    this.loading.showloading();
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
