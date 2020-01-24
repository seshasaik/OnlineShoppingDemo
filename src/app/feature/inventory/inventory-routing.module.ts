import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { ZeroItemInventoryComponent } from './components/zero-item-inventory/zero-item-inventory.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';

const routes: Routes = [
  { path: 'stock', component: ViewInventoryComponent },
  { path: 'add', component: AddInventoryComponent },
  { path: '', redirectTo: 'stock', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class InventoryRoutingModule { }
