import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
//Firebase
//import { AngularFireDatabase } from "angularfire2/database";
//import { Observable } from "rxjs/Observable";

//Plugins para comparitr los post en facebook
import { SocialSharing } from '@ionic-native/social-sharing';

import { CargaArchivoProvider } from "../../providers/carga-archivo/carga-archivo";

@IonicPage()
@Component({
  selector: 'page-alimentacion',
  templateUrl: 'alimentacion.html',
})
export class AlimentacionPage {

  hayMas:boolean=true;
  

  constructor(private modalCirl:ModalController,
              private _cap:CargaArchivoProvider,
              private socialSharing:SocialSharing) {


    //this.posts=afDB.list('post').valueChanges();
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad AlimentacionPage');
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





}


