import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './login-service';
import { URL } from '../app/app.config';
import { UtilService } from './util-service';
import { TabsPage } from '../pages/tabs/tabs';
import { NavController } from 'ionic-angular';

@Injectable()
export class RegisterService {

  constructor(public http: Http,
              public loading: UtilService,
              public navCtrl: NavController) { }

  // all():Observable<User[]>{
  //   return this.http.get(URL + "/users").map(response => {
  //     return response.json();
  //   }).catch(err => {
  //     return Observable.throw(err);
  //   });
  // }

  add(user: User): Observable<{success: boolean}>{

    let contentType = new Headers({"Content-Type":"application/json"});
    let options = new RequestOptions(contentType);

    return this.http.post(URL + "/users/signin", user).map(response => {
      this.loading.hideLoading();
      this.navCtrl.setRoot(TabsPage); 
      return response.json();
    }).catch(err => {
      return Observable.throw(err);
    });
  }
}
