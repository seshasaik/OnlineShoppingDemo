import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ZeroItemInventoryComponent } from './zero-item-inventory/zero-item-inventory.component';

const routes: Routes = [
  { path: 'stock', component: ViewInventoryComponent },
  { path: 'zeroStock', component: ZeroItemInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class InventoryRoutingModule { }
