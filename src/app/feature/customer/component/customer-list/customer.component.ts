import { Component, OnInit } from '@angular/core';
import { CustomereService } from '../../customere.service';
import { Customer } from 'src/app/model/customer';
import { MatTableDataSource, MatDialog, MatDialogConfig } from '@angular/material';
import { ShowCustomerComponent } from '../show-customer/show-customer.component';
import { CustomerModelData } from '../show-customer/customer-model-data';
import { UserGender } from 'src/app/model/user-gender.enum';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayColumns: string[] = ['sno', 'name', 'gender', 'email', 'phone', 'action'];
  customerDataSource: MatTableDataSource<Customer>;
  maleCustomer = UserGender.MALE;
  feMaleCustomer = UserGender.FEMALE;

  customerModelData: CustomerModelData = { customer: null, title: '' };
  constructor(private customerService: CustomereService, private showCustomerModel: MatDialog) {

  }



  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customerDataSource = new MatTableDataSource<Customer>(customers)
    });
  }

  editCustomer(id: string): void {

  }

  deleteCustomer(id: string): void {

  }

  viewCustomer(id: string): void {
    this.customerService.getCustomerById(id).subscribe(customer => {
      let materialDialogConfig = new MatDialogConfig();
      this.customerModelData.title = "Customer details";
      this.customerModelData.customer = customer;

      materialDialogConfig.data = this.customerModelData;
      materialDialogConfig.width = "500px"
      materialDialogConfig.height = "300px"
      materialDialogConfig.panelClass = "customer-detail-dialog"
      this.showCustomerModel.open(ShowCustomerComponent, materialDialogConfig);
    });
  }

}
