import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './components/suppliers/supplier.component';
import { FlexModule } from '@angular/flex-layout';
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { ViewSupplierComponent } from './components/view-supplier/view-supplier.component';
import { SupplierService } from './service/supplier.service';


@NgModule({
  declarations: [SupplierComponent, AddSupplierComponent, ViewSupplierComponent],
  imports: [
    CommonModule,
    FlexModule,
    GlobalMaterialModule,
    ReactiveFormsModule,
    SupplierRoutingModule
  ],
  providers: [
    SupplierService
  ]
})
export class SupplierModule { }
