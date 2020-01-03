import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CreateOrderComponent } from './create-order/create-order.component';


const routes: Routes = [
  { path: 'create', component: CreateOrderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class OrderRoutingModule { }
