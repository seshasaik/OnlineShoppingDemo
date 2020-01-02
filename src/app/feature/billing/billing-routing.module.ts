import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingComponent } from './billing.component';
import { PendingBillingsComponent } from './pending-billings/pending-billings.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [{ path: '', component: BillingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [PendingBillingsComponent, HistoryComponent]
})
export class BillingRoutingModule { }
