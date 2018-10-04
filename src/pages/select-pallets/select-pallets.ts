import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController  } from 'ionic-angular';
import { PalletapiProvider } from './../../providers/palletapi/palletapi';
import { ScanPage } from '../scan/scan';
import { SelectLoadPage } from '../select-load/select-load';

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
  value:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, palletProvider: PalletapiProvider, public menu:MenuController) {
    
    // this.getPallet()
    this.value=navParams.get('sendData')
    console.log(this.value)
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPalletsPage');
    this.menu.enable(false,'myMenu')
  }


}
