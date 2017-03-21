import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the UtilService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UtilService {  

  constructor(public http: Http, public loadingCtrl: LoadingController) {
    console.log('Hello UtilService Provider');
  }

  showloading(){
    let loader = this.loadingCtrl.create({
      content: "Procesando",
      duration: 2000
    });
    loader.present();      
  }

  hideLoading(){
    
  }

}
