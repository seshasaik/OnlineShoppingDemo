import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryComponent } from './inventory.component';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ZeroItemInventoryComponent } from './zero-item-inventory/zero-item-inventory.component';

const routes: Routes = [{ path: '', component: InventoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ViewInventoryComponent, ZeroItemInventoryComponent]
})
export class InventoryRoutingModule { }
