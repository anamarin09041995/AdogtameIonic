import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

import { UtilService } from '../../providers/util-service';
import { LoginService } from '../../providers/login-service';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  pass: string;
  
  constructor(public toastCtrl: ToastController, 
              public navCtrl: NavController, 
              public loading: UtilService, 
              public storage: Storage, 
              public service: LoginService){
    
  }

  createAccount(){
    this.navCtrl.push(RegisterPage);
  }

  goToBrochure(){
    // let data = {email:this.email, pass:this.pass}
    // this.storage.set("logged", true );
    // this.storage.set("user", JSON.stringify(data));
    // this.loading.showloading();
    // this.navCtrl.push(TabsPage);
    this.loading.showloading();
    this.service.login(this.email, this.pass).subscribe(res => {
      console.log(JSON.stringify(res));
      this.loading.hideLoading();
      
      if(res.success){
        this.navCtrl.push(TabsPage);  
      }else{
        this.toastCtrl.create({message: "Usuario o password invalido", duration: 3000}).present();
      }

    });

  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
