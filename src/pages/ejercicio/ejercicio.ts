import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Firebase
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-ejercicio',
  templateUrl: 'ejercicio.html',
})
export class EjercicioPage {

  ejercicios: Observable<any[]>;

  constructor(afDB: AngularFireDatabase) {
    this.ejercicios=afDB.list('ejercicio').valueChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjercicioPage');
  }

}
