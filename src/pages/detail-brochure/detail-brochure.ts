import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { BrochurePage } from '../brochure/brochure';
import { TracingPage } from '../tracing/tracing';
import { Storage } from '@ionic/storage';
import { SeguimientoService } from '../../providers/seguimiento-service';
import { Mascota } from '../../providers/mascota-data';
import { EmailService } from '../../providers/email-service';
import { Events } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { SessionService } from '../../providers/session.service';

@Component({
  selector: 'page-detail-brochure',
  templateUrl: 'detail-brochure.html'
})
export class DetailBrochurePage {

  nombre: string;
  imagen: string;
  fundacion: string;
  contacto: number;
  descripcion: string;

  apadrinado: boolean;
  mascota: Mascota;
  data = [];
  data1 = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: Storage,
    public service: SeguimientoService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public events: Events,
    public emailService: EmailService,
    public session: SessionService) {
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.fundacion = this.navParams.get("fundacion");
    this.contacto = this.navParams.get("contacto");
    this.descripcion = this.navParams.get("descripcion");
    this.apadrinado = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBrochurePage');
    this.service.verificarMascota(this.nombre).subscribe(res => this.apadrinado = true, err => this.apadrinado = false);
  }

  adoptar() {

    let alert = this.alertCtrl.create({
      title: '¡Muchas gracias por adoptar a ' + this.nombre,
      subTitle: 'Nos comunicaremos mediante un correo para detallar el proceso de adopción',
      buttons: [{
        text: 'Aceptar',
        handler: () => {
          console.log(this);
          console.log(this.emailService.adoptar());
          console.log('Aceptado');
        }
      }]
    });
    alert.present();
    this.navCtrl.pop(BrochurePage);
  }

  apadrinar() {
    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();

    this.service.apadrinar(this.nombre, this.imagen, this.descripcion).subscribe(res => {

      this.data.push(this.nombre, this.descripcion);
      console.log(this.data);
      this.storage.set("detail", this.data).then((val) => {
        this.session.data1 = val;
          console.log(val);
      });

      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.navCtrl.push(TracingPage);
      } else {
        this.toastCtrl.create({ message: "Error", duration: 3000 }).present();
      }

    });
  }

}
