import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreapiProvider } from './../../providers/storeapi/storeapi';

/**
 * Generated class for the SelectStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage({
//   name: 'selectStorePage'
// })
@Component({
  selector: 'page-select-store',
  templateUrl: 'select-store.html',
})
export class SelectStorePage {
  public store:any;
  searchTerm: string;
  filterItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storeApiProvider: StoreapiProvider) {
  this.getStore();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectStorePage');
  }

  getStore(){
    this.storeApiProvider.getStore().subscribe(data => {
      this.store = data;
      // this.filterItems = this.store
    });
  }

  filterStore(){
    if(this.searchTerm && this.searchTerm.trim() != ''){
    this.filterItems = this.store.filter(item =>
      (item.store).indexOf(this.searchTerm) >-1
    )
    }
    else{
      this.filterItems = [];
    }
  }

}
