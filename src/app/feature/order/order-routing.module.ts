import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { DeleteOrderComponent } from './delete-order/delete-order.component';

const routes: Routes = [{ path: '', component: OrderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [CreateOrderComponent, EditOrderComponent, OrderItemsComponent, DeleteOrderComponent]
})
export class OrderRoutingModule { }
