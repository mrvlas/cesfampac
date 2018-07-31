import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Se impotan los tabs necesarios
import {TabsLlamarPage, TabsMuniPage, HomePage} from "../index.paginas";

//Bloquear orientacion de pantalla 
import { ScreenOrientation } from "@ionic-native/screen-orientation";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  //Se declaran dos variables para las tabs
  public tabLlamar:any;
  public tabMuni:any;
  public tabPrincipal:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private screenOrientation:ScreenOrientation) {

    // se inician las variables y se asignan las paginas 
    this.tabLlamar=TabsLlamarPage;
    this.tabMuni=TabsMuniPage;
    this.tabPrincipal=HomePage;

    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
