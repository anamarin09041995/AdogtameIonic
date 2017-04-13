import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage} from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
 

 
  constructor(platform: Platform, public storage: Storage) {
    platform.ready().then(() => {
      storage.ready().then(() => {});
      
        storage.get("logged").then((val) => {
         if (val){
           this.rootPage = TabsPage;
         }else{
           this.rootPage = LoginPage;
         }
       })

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
