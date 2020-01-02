import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopingCartComponent } from './shoping-cart.component';

const routes: Routes = [{ path: '', component: ShopingCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopingCartRoutingModule { }
