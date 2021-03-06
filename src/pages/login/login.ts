import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { LoginService } from '../../providers/login-service';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import { SessionService } from "../../providers/session.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string;
  pass: string;

  constructor(public toastCtrl: ToastController,
    public navCtrl: NavController,
    public storage: Storage,
    public service: LoginService,
    public loadingCtrl: LoadingController,
    public session: SessionService
  ) {

  }

  createAccount() {
    this.navCtrl.push(RegisterPage);
  }

  goToBrochure() {
    //  let data = { email: this.email, pass: this.pass };
    //     this.storage.set("logged", true);
    //     this.storage.set("user", JSON.stringify(data));
    //     console.log(data);

    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();

    this.service.login(this.email, this.pass).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.storage.set("email", this.email).then(() => {
          this.storage.get("email").then(val => {
            this.session.email = val;
            console.log(val)
          });
        });
        this.storage.set("id", res.user._id).then(() => {
          this.storage.get("id").then(val => this.session.id = val);
        });

        this.navCtrl.push(TabsPage);
      } else {
        this.toastCtrl.create({ message: "Usuario o password invalido", duration: 3000 }).present();
      }

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
