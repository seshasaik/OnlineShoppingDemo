import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './productList/product.component';
import { ViewProductComponent } from './view-product/view-product.component';



@NgModule({
  declarations: [ProductComponent, ViewProductComponent, ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
