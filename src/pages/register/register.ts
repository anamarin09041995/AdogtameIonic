import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { RegisterService } from '../../providers/register-service';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { User } from '../../providers/login-service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user: User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public service: RegisterService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {
    this.user = new User();
  }

  goToBrochure() {
    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();

    this.service.signin(this.user).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.navCtrl.push(TabsPage);
      } else {
        this.toastCtrl.create({ message: "Este usuario ya se encuentra registrado", duration: 3000 }).present();
      }
    });

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
