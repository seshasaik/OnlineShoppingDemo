import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { FrontDeskStaffComponent } from './front-desk-staff/front-desk-staff.component';
import { InvetoryInchargeComponent } from './invetory-incharge/invetory-incharge.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'frontDesk', component: FrontDeskStaffComponent },
  { path: 'InventroyIncharge', component: InvetoryInchargeComponent },
  { path: 'Employee', component: EmployeeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DashboardRoutingModule { }
