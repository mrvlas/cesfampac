import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// Se impotan los tabs necesarios
import {TabsLlamarPage, TabsMuniPage, HomePage} from "../index.paginas";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // se inician las variables y se asignan las paginas 
    this.tabLlamar=TabsLlamarPage;
    this.tabMuni=TabsMuniPage;
    this.tabPrincipal=HomePage;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
