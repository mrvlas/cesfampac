import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';

//Se importan todas las paginas  a este modulo
import {DetallePage,
  HomePage, 
  ModalPage,
  TabsPage,
  TabsLlamarPage,
  TabsMuniPage} from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ModalPage,
    TabsPage,
    TabsLlamarPage,
    TabsMuniPage,
    DetallePage
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
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
