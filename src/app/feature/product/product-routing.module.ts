import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './components/productList/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';

const routes: Routes = [
  { path: 'add', component: AddProductComponent },
  { path: 'edit/:productId', component: EditProductComponent },
  { path: 'view/:productId', component: ViewProductComponent },
  { path: 'list', component: ProductComponent },
  { path: '', redirectTo: 'list', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
