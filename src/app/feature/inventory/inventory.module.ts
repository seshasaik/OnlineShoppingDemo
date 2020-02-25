import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { ZeroItemInventoryComponent } from './components/zero-item-inventory/zero-item-inventory.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { InventoryService } from './service/inventory.service';
import { MaxProductPricePipe } from './pipes/max-product-price.pipe';
import { SumProductQuantityPipe } from './pipes/sum-product-quantity.pipe';
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';



@NgModule({
  imports: [
    CommonModule,
    GlobalMaterialModule,
    InventoryRoutingModule
  ],
  declarations: [ViewInventoryComponent, ZeroItemInventoryComponent, AddInventoryComponent, MaxProductPricePipe, SumProductQuantityPipe],
  providers: [
    InventoryService
  ]
})
export class InventoryModule { }
