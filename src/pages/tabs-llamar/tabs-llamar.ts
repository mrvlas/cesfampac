import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-tabs-llamar',
  templateUrl: 'tabs-llamar.html',
})
export class TabsLlamarPage {

  //public llamar:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsLlamarPage');
  }

  llamarCesfam(){
    console.log("Dentro de la funcion llamar");
    this.callNumber.callNumber("+56800432299", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  horaMedica(){
    console.log("Solicitar hora medica");
    this.callNumber.callNumber("+56800432299", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  llamarMunicipalidad(){
    console.log("Dentro de la funcion llamar Municipalidad");
    this.callNumber.callNumber("+56342436200", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  fonoDenuncia(){
    console.log("Dentro de la funcion fono Denuncia");
    this.callNumber.callNumber("+56958167284", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  llamarPosta(){
   // console.log("Dentro de la funcion llamar Municipalidad");
    this.callNumber.callNumber("+56342461824", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  llamarCcpac(){
    //console.log("Dentro de la funcion llamar Municipalidad");
    this.callNumber.callNumber("+56342462012", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  llamarRadio(){
   // console.log("Dentro de la funcion llamar Municipalidad");
    this.callNumber.callNumber("+56342461212", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  llamarBomberos(){
    //console.log("Dentro de la funcion llamar Municipalidad");
    this.callNumber.callNumber("+56342461000", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  llamarCarabineros(){
    this.callNumber.callNumber("+56342334104", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

  hospitalVeterinario(){
    this.callNumber.callNumber("+56342436249", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }
  poliDeportivo(){
    this.callNumber.callNumber("+56342461505", true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

}
