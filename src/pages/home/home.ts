import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MENU} from "../../data/menuprincipal.data"; //Se importa el arreglo
import {Menuprincipal} from "../../interfaces/menuprincipal.interfaces"; // Se importa la interfaz
import {CasfamPage} from "../casfam/casfam";
import { CallNumber } from '@ionic-native/call-number';
import { AlimentacionPage } from "../alimentacion/alimentacion";
import { EjercicioPage } from "../ejercicio/ejercicio";

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

//Bloquear orientacion de pantalla
import { ScreenOrientation } from "@ionic-native/screen-orientation";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menu:Menuprincipal[]=[];

  constructor(public navCtrl: NavController, 
              private callNumber: CallNumber,
              private screenOrientation:ScreenOrientation) {

    this.menu=MENU.slice(0);//Se crea un clon del objeto menu
    console.log(this.menu[0].img);

    //Bloquear Orientación de pantalla
    //console.log(this.screenOrientation.type);
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);


  }

  MostrarMenu(menuPrincipal:Menuprincipal){
    console.log(menuPrincipal);
    
   if (menuPrincipal.nombre == "CESFAM PAC"){
     this.navCtrl.push(CasfamPage);
   } 
   if (menuPrincipal.nombre=="Pide tú hora"){
     console.log("Has precionado el menu pide tu hora");
     this.callNumber.callNumber("+56800432299", true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err))
   }

   if(menuPrincipal.nombre == "Alimentacíon saludable"){
     this.navCtrl.push(AlimentacionPage);
   }

   if(menuPrincipal.nombre == "Ejercicios"){
    this.navCtrl.push(EjercicioPage);
  }

   
   //La siguiente linea es para cargar una pagina enviando parametros
    // this.navCtrl.push(DetallePage,{'detalle_menu':menuPrincipal});//Se carga la pagina que mostrara el detalle
   
  
  }

}
