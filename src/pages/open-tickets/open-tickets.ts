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

  public tickets:any;
  filterTickets: any;
  item1: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public ticketapi: OpenTicketapiProvider) {
    this.getTicket();
    this.ticketType;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenTicketsPage');
  }

  ticketType = [{type: "Create Return"}, {type: "Create Pickup"}];
  selectedticketType = "Select Ticket Type";

  getTicket(){
    this.ticketapi.getTicket().subscribe(data => {
      this.tickets = data;
      this.filterTickets = this.tickets;
    });
  }

  onChangeTicket(newObj) {
    console.log(newObj);
    this.selectedticketType = newObj;
    console.log(this.selectedticketType['type'])
    console.log(this.filterTickets);
    this.item1 = this.filterTickets.filter(i => i.ticketType === this.selectedticketType['type']);
    console.log(this.item1)
  }

}
