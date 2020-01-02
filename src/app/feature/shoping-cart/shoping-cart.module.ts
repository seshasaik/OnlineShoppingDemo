import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingCartRoutingModule } from './shoping-cart-routing.module';
import { ShopingCartComponent } from './shoping-cart.component';


@NgModule({
  declarations: [ShopingCartComponent],
  imports: [
    CommonModule,
    ShopingCartRoutingModule
  ]
})
export class ShopingCartModule { }
