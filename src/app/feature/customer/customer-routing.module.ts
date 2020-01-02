import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer-list/customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

const routes: Routes = [{ path: '', component: CustomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SearchCustomerComponent, AddCustomerComponent, EditCustomerComponent, DeleteCustomerComponent]
})
export class CustomerRoutingModule { }
