import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/productList/product.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

import { ProductService } from './service/product-service.service';
import { SearchProductComponent } from './components/search-product/search-product.component'
import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSupplierComponent } from './components/product-supplier/product-supplier.component';



@NgModule({
  declarations: [ProductComponent, ViewProductComponent, EditProductComponent, AddProductComponent, SearchProductComponent, ProductSupplierComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GlobalMaterialModule,
    FlexLayoutModule,
    ProductRoutingModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
