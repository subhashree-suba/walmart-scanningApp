import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SelectStorePage } from '../pages/select-store/select-store';
import { ReceiveShipmentPage } from '../pages/receive-shipment/receive-shipment';
import { ScanPage } from '../pages/scan/scan';
import { SelectLoadPage } from '../pages/select-load/select-load';
import { ItemsPage } from '../pages/items/items';

import { firebaseConfig } from './../config' ;

@NgModule({
  declarations: [
    MyApp,
    // HomePage
    LoginPage,
    SelectStorePage,
    ReceiveShipmentPage,
    ScanPage,
    SelectLoadPage,
    ItemsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement:'top'
    }),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // HomePage
    LoginPage,
    SelectStorePage,
    ReceiveShipmentPage,
    ScanPage,
    SelectLoadPage,
    ItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
