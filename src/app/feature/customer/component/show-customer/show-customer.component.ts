import { Component, OnInit, Inject } from '@angular/core';
import { UserGender } from 'src/app/model/enums/user-gender.enum';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CustomerModelData } from './customer-model-data';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent implements OnInit {

  title: String;
  customer: Customer;  
  maleCustomer = UserGender.MALE;
  feMaleCustomer = UserGender.FEMALE;
  constructor(public matDialogRef: MatDialogRef<ShowCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CustomerModelData) {
    this.title = data.title;
    this.customer = data.customer;
  }

  ngOnInit() {
  }

  closeDialog(): void {
    console.log("model close called");
    this.matDialogRef.close(null);
  }

}


