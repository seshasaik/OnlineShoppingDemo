import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingBillingsComponent } from './pending-billings/pending-billings.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: 'pending', component: PendingBillingsComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: 'history', pathMatch: "prefix" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillingRoutingModule { }
