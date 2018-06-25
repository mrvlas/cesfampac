import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';

//Se importan todas las paginas  a este modulo
import {DetallePage,
  HomePage, 
  ModalPage,
  TabsPage,
  CasfamPage,
  TabsLlamarPage,
  TabsMuniPage,} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ModalPage,
    TabsPage,
    TabsLlamarPage,
    TabsMuniPage,
    DetallePage,
    CasfamPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atras'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    ModalPage,
    TabsPage,
    TabsLlamarPage,
    TabsMuniPage,
    DetallePage,
    CasfamPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
