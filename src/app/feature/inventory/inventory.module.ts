import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ViewInventoryComponent } from './view-inventory/view-inventory.component';
import { ZeroItemInventoryComponent } from './zero-item-inventory/zero-item-inventory.component';



@NgModule({  
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [ViewInventoryComponent, ZeroItemInventoryComponent]
})
export class InventoryModule { }
