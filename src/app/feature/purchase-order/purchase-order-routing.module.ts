import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPurchaseOrderComponent } from './component/new-purchase-order/new-purchase-order.component';
import { PurchaseOrderComponent } from './component/purchase-order/purchase-order.component';


const routes: Routes = [
  { path: 'add', component: NewPurchaseOrderComponent },
  { path: 'list', component: PurchaseOrderComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseOrderRoutingModule { }
