import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { ZeroItemInventoryComponent } from './components/zero-item-inventory/zero-item-inventory.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';



@NgModule({  
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [ViewInventoryComponent, ZeroItemInventoryComponent, AddInventoryComponent]
})
export class InventoryModule { }
