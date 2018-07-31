import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { MyApp } from './app.component';
//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Plugins Para compartir los post
import { SocialSharing } from '@ionic-native/social-sharing';

//Plugins para boquear orientación de pantalla
import { ScreenOrientation } from "@ionic-native/screen-orientation";



//Se importan todas las paginas  a este modulo
import {DetallePage,
  HomePage, 
  ModalPage,
  TabsPage,
  CasfamPage,
  TabsLlamarPage,
  AlimentacionPage,
  EjercicioPage,
  TabsMuniPage} from "../pages/index.paginas";
import { CargaArchivoProvider } from '../providers/carga-archivo/carga-archivo'; //Provider cargado

  //Firebase
  export const firebaseConfig = {
    apiKey: "AIzaSyCHyjj-BFywbXHoXtEcz_kA9qOuKW48rfg",
    authDomain: "cesfam-b9365.firebaseapp.com",
    databaseURL: "https://cesfam-b9365.firebaseio.com",
    projectId: "cesfam-b9365",
    storageBucket: "cesfam-b9365.appspot.com",
    messagingSenderId: "505106794512"
  };

  //Fin Firebase



@NgModule({ //Aca se deben incoroprar las page
  declarations: [
    MyApp,
    HomePage, 
    ModalPage,
    TabsPage,
    TabsLlamarPage,
    TabsMuniPage,
    DetallePage,
    AlimentacionPage,
    CasfamPage,
    EjercicioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
    backButtonText: 'Atras'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ //Acá tambien se deben incorporar las page
    MyApp,
    HomePage, 
    ModalPage,
    TabsPage,
    TabsLlamarPage,
    TabsMuniPage,
    DetallePage,
    AlimentacionPage,
    CasfamPage,
    EjercicioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    AngularFireDatabase,
    SocialSharing,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CargaArchivoProvider
  ]
})
export class AppModule {}
