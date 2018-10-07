import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OpenTicketapiProvider } from './../../providers/open-ticketapi/open-ticketapi';

/**
 * Generated class for the OpenTicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open-tickets',
  templateUrl: 'open-tickets.html',
})
export class OpenTicketsPage {

  public load:any;
  filterItems: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ticketapi: OpenTicketapiProvider) {
    this.getTicket();
    this.ticketType;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenTicketsPage');
  }

  ticketType = [{type: "Create Return"}, {type: "Create Pickup"}];
  selectedticketType = "Select Ticket Type";

  onChangeTicket(newObj) {
    console.log(newObj);
    this.selectedticketType = newObj;
    
  }

  getTicket(){
    this.ticketapi.getTicket().subscribe(data => {
      this.load = data;
      this.filterItems = this.load;
    });
  }

}
