import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilService } from '../../providers/util-service';
import { RegisterService } from '../../providers/register-service';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../providers/login-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  city: string;
  email: string;
  pass: string;
  //user: User;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loading: UtilService, 
              //public service: RegisterService
              ) {}
  
  goToBrochure(){
    this.loading.showloading();
    //this.service.add(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
