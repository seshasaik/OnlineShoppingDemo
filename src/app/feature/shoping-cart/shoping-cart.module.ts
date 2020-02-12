import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopingCartRoutingModule } from './shoping-cart-routing.module';
import { ShopingCartComponent } from './shoping-cart.component';
import { ShopingCartService } from './service/shoping-cart.service';


@NgModule({
  declarations: [ShopingCartComponent],
  imports: [
    CommonModule,
    ShopingCartRoutingModule
  ],
  providers:[
    ShopingCartService
  ]
})
export class ShopingCartModule { }
