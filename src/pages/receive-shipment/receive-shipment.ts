import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanPage } from '../scan/scan';
import { SelectLoadPage } from '../select-load/select-load';

@IonicPage()
@Component({
  selector: 'page-receive-shipment',
  templateUrl: 'receive-shipment.html',
})
export class ReceiveShipmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveShipmentPage');
  }

  tab1root= ScanPage;
  tab2root= SelectLoadPage;

}
