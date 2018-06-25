import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MENU} from "../../data/menuprincipal.data"; //Se importa el arreglo
import {Menuprincipal} from "../../interfaces/menuprincipal.interfaces"; // Se importa la interfaz
import {CasfamPage} from "../casfam/casfam";
import { CallNumber } from '@ionic-native/call-number';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menu:Menuprincipal[]=[];

  constructor(public navCtrl: NavController, private callNumber: CallNumber) {

    this.menu=MENU.slice(0);//Se crea un clon del objeto menu
    console.log(this.menu[0].img);

  }

  MostrarMenu(menuPrincipal:Menuprincipal){
    console.log(menuPrincipal);
    
   if (menuPrincipal.nombre == "CESFAM PAC"){
     this.navCtrl.push(CasfamPage);
   } 
   if (menuPrincipal.nombre=="Pide tú hora"){
     console.log("Has precionado el menu pide tu hora");
     this.callNumber.callNumber("342436200", true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err))


   }

   
   //La siguiente linea es para cargar una pagina enviando parametros
    // this.navCtrl.push(DetallePage,{'detalle_menu':menuPrincipal});//Se carga la pagina que mostrara el detalle
   
  
  }

}
