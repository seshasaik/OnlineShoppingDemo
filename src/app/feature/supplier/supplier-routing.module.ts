import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupplierComponent } from './suppliers/supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';

const routes: Routes = [{ path: '', component: SupplierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AddSupplierComponent, ViewSupplierComponent]
})
export class SupplierRoutingModule { }
