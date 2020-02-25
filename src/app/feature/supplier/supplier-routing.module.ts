import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierComponent } from './components/suppliers/supplier.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './components/view-supplier/view-supplier.component';

const routes: Routes = [
  { path: 'list', component: SupplierComponent },
  { path: 'add', component: AddSupplierComponent },
  { path: 'view', component: ViewSupplierComponent },
  { path: '', redirectTo:'list', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class SupplierRoutingModule { }
