import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { FrontDeskStaffComponent } from './front-desk-staff/front-desk-staff.component';
import { InvetoryInchargeComponent } from './invetory-incharge/invetory-incharge.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), AdminModule],
  exports: [RouterModule],
  declarations: [AdminComponent, CustomerComponent, FrontDeskStaffComponent, InvetoryInchargeComponent, EmployeeComponent]
})
export class DashboardRoutingModule { }
