import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PalletapiProvider } from './../../providers/palletapi/palletapi';

/**
 * Generated class for the SelectPalletsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-pallets',
  templateUrl: 'select-pallets.html',
})
export class SelectPalletsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, palletProvider: PalletapiProvider) {
    this.getPallet()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPalletsPage');
  }

}
