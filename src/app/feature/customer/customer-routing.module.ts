import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './component/customer-list/customer.component';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';

const routes: Routes = [
  { path: 'list', component: CustomerComponent },
  { path: 'search', component: SearchCustomerComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: '', redirectTo: 'list', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule { }
