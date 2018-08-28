import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Firebase
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

//Provider
import { CargaArchivoProvider2 } from "../../providers/carga-archivo/carga-archivo2";
//Plugins para comparitr los post en facebook
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-ejercicio',
  templateUrl: 'ejercicio.html',
})
export class EjercicioPage {

  hayMas:boolean=true;

  ejercicios: Observable<any[]>;

  constructor(private _cap:CargaArchivoProvider2,
              private socialSharing:SocialSharing) {

    

  }
  doInfinite(infiniteScroll) {
    console.log('Begin async operation'); 

    this._cap.cargar_imagenes().then(
      (hayMas2:boolean)=>{

        console.log(hayMas2);
        this.hayMas=hayMas2;

        infiniteScroll.complete();   
      } 
    );

      
  }

  //Funcion para compartir en facebook
  compartir( post:any ){

    this.socialSharing.shareViaFacebook(post.titulo, post.descripcion, post.img)
      .then(()=>{}) //Se pudo compartir
      .catch(()=>{}) // En caso de un error
      //console.log(this.socialSharing);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EjercicioPage');
  }

}
