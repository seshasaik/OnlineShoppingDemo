import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { FrontDeskStaffComponent } from './front-desk-staff/front-desk-staff.component';
import { InvetoryInchargeComponent } from './invetory-incharge/invetory-incharge.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [AdminComponent, CustomerComponent, FrontDeskStaffComponent, InvetoryInchargeComponent, EmployeeComponent]
})
export class DashboardModule { }
