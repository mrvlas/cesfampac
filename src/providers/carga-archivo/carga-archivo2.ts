import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'firebase'; //Libreria Completa de Firebase
import 'rxjs/add/operator/map';

@Injectable()
export class CargaArchivoProvider2 {

  imagenes:ArchivoSubir[]=[];
  lastKey:number; //hace Referencia al nodo


  constructor(public afDB:AngularFireDatabase) {
    
        this.cargar_ultimo_key() 
        .subscribe( ()=> this.cargar_imagenes())
  }

  private cargar_ultimo_key(){
    //FUNCION RESPONSABLE DE CARGAR LA ULTIMA IMAGEN SUBIDA A LA BD de las primeras
    return this.afDB.list('/ejercicio',ref=> ref.orderByKey().limitToLast(1) )
    .valueChanges()
    .map((post:any)=>{

      console.log(post);
      this.lastKey=post[0].z;

      this.imagenes.push( post[0] );


    });

  }
//    EN LA FUNCION CARGAR_IMAGENES ESTA EL PROBLEMA

cargar_imagenes(){
  //FUNCION RESPONSABLE DE CARGAR GRUPO DE IMAGENES
 // console.log('en la funcion cargar imagenes');
  return new Promise( (resolve,reject)=>{ 
    //console.log(this.ultimoIndicador);

    this.afDB.list('/ejercicio',
      ref=> ref.limitToLast(3)
               .orderByKey()
               .endAt (this.lastKey)
  ).valueChanges()
   .subscribe((posts:any)=>{

      posts.pop(); //SE BORRA LA ULTIMA POSICIÓN DEL ARREGLO PARA NO REPETIR LA ULTIMA IMAGEN

      if(posts.length == 0){
        console.log('No hay más registros ');
        resolve(false);
        return;
      }
      console.log('aun hay registros'); 
      this.lastKey= posts[0].z;
     // console.log(this.ultimoIndicador);

      for(let i = posts.length-1; i >=0; i--){

        let post= posts[i];
        this.imagenes.push(post);

      }

      resolve(true);
      console.log('hay mas imagenes de ejercicio');

   });


  });
}

}

interface ArchivoSubir{ //Interfaz para necesaria para crear el arreglo
  descripcion:string;
  fecha:string;
  img: string;
  titulo: string;
  z?:string; // indicador del numero de la imagen cargada
}
