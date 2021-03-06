import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';

import { GlobalMaterialModule } from 'src/app/global-material-module/global-material-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomereService } from './customere.service';

import { CustomerComponent } from './component/customer-list/customer.component';
import { SearchCustomerComponent } from './component/search-customer/search-customer.component';
import { AddCustomerComponent } from './component/add-customer/add-customer.component';
import { EditCustomerComponent } from './component/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './component/delete-customer/delete-customer.component';
import { ShowCustomerComponent } from './component/show-customer/show-customer.component';
import { CustomerByIdAPIResolver } from './customer-by-id-apiresolver';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    GlobalMaterialModule,
    FlexLayoutModule
  ],
  providers: [CustomereService, CustomerByIdAPIResolver],
  declarations: [SearchCustomerComponent, AddCustomerComponent, EditCustomerComponent, DeleteCustomerComponent, CustomerComponent, ShowCustomerComponent],
  entryComponents: [ShowCustomerComponent],

})
export class CustomerModule { }
