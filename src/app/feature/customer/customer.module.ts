import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';
import { CustomerComponent } from './component/customer-list/customer.component';
import { GlobalMaterialModuleModule } from 'src/app/global-material-module/global-material-module.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    GlobalMaterialModuleModule
  ],
  declarations: [SearchCustomerComponent, AddCustomerComponent, EditCustomerComponent, DeleteCustomerComponent, CustomerComponent]
})
export class CustomerModule { }
