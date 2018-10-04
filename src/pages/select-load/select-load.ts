import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

import { SelectPalletsPage } from '../select-pallets/select-pallets';

import { LoadapiProvider } from './../../providers/loadapi/loadapi';
import { PalletapiProvider } from './../../providers/palletapi/palletapi';
/**
 * Generated class for the SelectLoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-load',
  templateUrl: 'select-load.html',
})
export class SelectLoadPage {
  public load:any;
  searchTerm: string;
  filterItems: any;
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: LoadapiProvider, public palletApiProvider: PalletapiProvider, public events: Events) {
    
    // this.palletApiProvider.getPallet(this.selectedItem).subscribe(results =>{
    //   console.log(results);
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLoadPage');
    this.getLoad();
  }

  getLoad(){
    this.restProvider.getLoad().subscribe(data => {
      this.load = data;
      this.filterItems = this.load
    });
  }

  // getItems(ev){
  //   let val = ev.target.value;
  //   // if(val && val.trim() != ''){
  //     // this.load = this.load.filter(item =>{
  //     //   return (item.loadNo.indexOf(val)!= -1)
  //     // })
  //     return this.load.filter((item) => {
  //       return item.loadNo.indexOf(val) > -1;
  //   }); 
    // }
    // else{
    //   this.getLoad();
    // }
// loadData(){
//   this.filterItems = this.load
// }

filterItem(){
  if(this.searchTerm && this.searchTerm.trim() != ''){
  this.filterItems = this.load.filter(item =>
    ((item.loadNo).toString()).indexOf(this.searchTerm) >-1
  )
  }
}

selectLoad(selectedItem){
  console.log(selectedItem);
  this.palletApiProvider.getPallet(selectedItem).subscribe(results =>{
    console.log(results);
    // this.navCtrl.push(SelectPalletsPage,{
    //   sendData:results
    //   });
    // this.navCtrl.push(SelectPalletsPage);
    this.events.publish('page:selectPallet', results)
  })
}
    
  }


