import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiveShipmentPage } from './receive-shipment';

@NgModule({
  declarations: [
    ReceiveShipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiveShipmentPage),
  ],
})
export class ReceiveShipmentPageModule {}
