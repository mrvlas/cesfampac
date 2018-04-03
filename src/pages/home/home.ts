import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MENU} from "../../data/menuprincipal.data"; //Se importa el arreglo
import {Menuprincipal} from "../../interfaces/menuprincipal.interfaces"; // Se importa la interfaz
import {DetallePage} from "../detalle/detalle"; //Pagina para mostrar el detalle


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public menu:Menuprincipal[]=[];

  constructor(public navCtrl: NavController) {

    this.menu=MENU.slice(0);//Se crea un clon del objeto menu
    console.log(this.menu[0].img);

  }

  MostrarMenu(menuPrincipal:Menuprincipal){
    console.log(menuPrincipal);
    this.navCtrl.push(DetallePage,{'detalle_menu':menuPrincipal});//Se carga la pagina que mostrara el detalle
   
  
  }

}
