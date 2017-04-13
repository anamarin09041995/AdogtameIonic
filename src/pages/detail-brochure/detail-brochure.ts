import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { BrochurePage } from '../brochure/brochure';
import { TracingPage } from '../tracing/tracing';
import { Storage } from '@ionic/storage';
import { SeguimientoService } from '../../providers/seguimiento-service';
import { Mascota } from '../../providers/mascota-data';
import { EmailService } from '../../providers/email-service';
import { Events } from 'ionic-angular';
import { MascotaSelected } from '../../providers/mascota-selected';
import { TabsPage } from '../tabs/tabs';


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
  


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: Storage,
    public service: SeguimientoService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public events: Events,
    public emailService: EmailService,
    public selected: MascotaSelected) {

    let mascota = selected.selected;
    
    this.nombre = mascota.nombre;
    this.imagen = mascota.imagen;
    this.fundacion = mascota.fundacion;
    this.contacto = mascota.contacto;
    this.descripcion = mascota.descripcion;
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
          this.emailService.adoptar();
          console.log('Aceptado');
        }
      }]
    });
    alert.present();
    this.navCtrl.pop();
    
  }

  apadrinar() {
    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();

    this.service.apadrinar(this.nombre, this.imagen, this.descripcion).subscribe(res => {
      loading.dismiss();
      console.log(JSON.stringify(res));
      if (res.success) {
        this.navCtrl.pop();
        this.events.publish("nav:tracing");
      } else {
        this.toastCtrl.create({ message: "Error", duration: 3000 }).present();
      }

    });
  }

}
