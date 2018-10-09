import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule  } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SelectStorePage } from '../pages/select-store/select-store';
import { ReceiveShipmentPage } from '../pages/receive-shipment/receive-shipment';
import { ScanPage } from '../pages/scan/scan';
import { SelectLoadPage } from '../pages/select-load/select-load';
import { ItemsPage } from '../pages/items/items';
import { SelectPalletsPage } from '../pages/select-pallets/select-pallets';
import { OpenTicketsPage } from '../pages/open-tickets/open-tickets';

// import { firebaseConfig } from './../config' ;
import { LoadapiProvider } from '../providers/loadapi/loadapi';
import { StoreapiProvider } from '../providers/storeapi/storeapi';
import { PalletapiProvider } from '../providers/palletapi/palletapi';
import { OpenTicketapiProvider } from '../providers/open-ticketapi/open-ticketapi';

@NgModule({
  declarations: [
    MyApp,
    // HomePage
    LoginPage,
    SelectStorePage,
    ReceiveShipmentPage,
    ScanPage,
    SelectLoadPage,
    ItemsPage,
    SelectPalletsPage,
    OpenTicketsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsPlacement:'top'
    }),
    // AngularFireModule.initializeApp(firebaseConfig.fire),
    // AngularFireAuthModule,
    HttpClientModule,
    HttpModule 
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
    ItemsPage,
    SelectPalletsPage,
    OpenTicketsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadapiProvider,
    StoreapiProvider,
    PalletapiProvider,
    OpenTicketapiProvider
  ]
})
export class AppModule {}
