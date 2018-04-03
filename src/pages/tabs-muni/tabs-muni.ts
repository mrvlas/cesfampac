import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tabs-muni',
  templateUrl: 'tabs-muni.html',
})
export class TabsMuniPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsMuniPage');
  }

  volverInicio(){
    this.navCtrl.parent.select(1);
  }

  

}
