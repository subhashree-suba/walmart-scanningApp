import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SelectStorePage } from '../pages/select-store/select-store';
import { ReceiveShipmentPage } from '../pages/receive-shipment/receive-shipment';
import { SelectPalletsPage } from '../pages/select-pallets/select-pallets';
// import { SelectPalle¿sPage } from '../pages/select-pallets/select-pallets';
import { OpenTicketsPage } from '../pages/open-tickets/open-tickets';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  activePage: any;
  pages: Array<{ title: string, component: any, icon: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, events: Events) {
    this.initializeApp();
    this.pages = [
      { title: 'Select Store', component: SelectStorePage, icon: 'home' },
      { title: 'Receive Shipment', component: ReceiveShipmentPage, icon: 'archive' },
      { title: 'Open Tickets', component: OpenTicketsPage, icon: 'bookmarks' }
    ]
    this.activePage = this.pages[0];
    
    events.subscribe('page:selectPallet', (data) => {
      this.nav.push(SelectPalletsPage,{
          sendData:data
          });
    })
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  logoutPage() {
    this.nav.setRoot(LoginPage);
  }

  checkActive(page) {
    return page === this.activePage;
  }
}

