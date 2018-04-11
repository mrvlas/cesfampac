import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-tabs-llamar',
  templateUrl: 'tabs-llamar.html',
})
export class TabsLlamarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsLlamarPage');
  }

  llamarCesfam(){
    console.log("Dentro de la funcion llamar");
    this.callNumber.callNumber("342436200", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
