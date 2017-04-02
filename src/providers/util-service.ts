import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';



@Injectable()
export class UtilService {  

  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello UtilService Provider');
    
  }

 loader = this.loadingCtrl.create({
      content: "Cargando...",
    });

  showloading(){
    this.loader.present();
   
  }

  hideLoading(){
  this.loader.dismiss();
  }

}
