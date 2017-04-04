import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { BrochurePage} from '../brochure/brochure';
import { TracingPage } from '../tracing/tracing';
import { Storage } from '@ionic/storage';
import { SeguimientoService } from '../../providers/seguimiento-service';


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


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              public storage: Storage,
              public service: SeguimientoService,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
    this.nombre = this.navParams.get("nombre");
    this.imagen = this.navParams.get("imagen");
    this.fundacion = this.navParams.get("fundacion");
    this.contacto = this.navParams.get("contacto");
    this.descripcion = this.navParams.get("descripcion");

    //let data1 = {nombre:this.nombre, imagen:this.imagen, contacto: this.contacto}
    //this.storage.set("selected", true );
    //this.storage.set("detail", JSON.stringify(data1));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailBrochurePage');
  }

  adoptar() {
    let alert = this.alertCtrl.create({
      title: '¡Muchas gracias por adoptar a '+ this.nombre,
      subTitle: 'Nos comunicaremos mediante un correo para detallar el proceso de adopción',
      buttons: ['Aceptar']
    });
    alert.present();
    this.navCtrl.pop(BrochurePage);
  }

  apadrinar() {
    let loading = this.loadingCtrl.create({ content: "Cargando ..." });
    loading.present();
     this.service.apadrinar(this.nombre, this.imagen, this.descripcion).subscribe(res => {
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
