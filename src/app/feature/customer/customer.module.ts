import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';



@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
  ],
  declarations: [SearchCustomerComponent, AddCustomerComponent, EditCustomerComponent, DeleteCustomerComponent]
})
export class CustomerModule { }
