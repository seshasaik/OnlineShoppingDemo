import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingRoutingModule } from './billing-routing.module';
import { PendingBillingsComponent } from './pending-billings/pending-billings.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [PendingBillingsComponent, HistoryComponent],
  imports: [
    CommonModule,
    BillingRoutingModule
  ]
})
export class BillingModule { }
