import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  public detalleMenu:any={}; //Se crea un objeto vacio para recibir el objeto enviado por parametro

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams);
    this.detalleMenu=this.navParams.get("detalle_menu");

  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
