import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';



@NgModule({
  declarations: [CreateOrderComponent, EditOrderComponent, OrderItemsComponent, DeleteOrderComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
