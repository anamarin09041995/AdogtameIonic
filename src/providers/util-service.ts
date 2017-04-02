import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class UtilService {  

  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello UtilService Provider');
  }

  showloading(){
    let loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 2000
    });
    loader.present();      
  }

  hideLoading(){
    
  }

}
