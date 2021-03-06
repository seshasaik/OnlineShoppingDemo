import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { UserGender } from 'src/app/model/enums/user-gender.enum';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomereService } from '../../customere.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer;
  customerFormGroup: FormGroup;
  constructor(private customerService: CustomereService) {

  }

  ngOnInit() {

    this.customerFormGroup = new FormGroup({
      "firstName": new FormControl("", [Validators.required]),
      "middelName": new FormControl(""),
      "lastName": new FormControl("", [Validators.required]),
      "gender": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required]),
      "phone": new FormControl("", [Validators.required]),
      "address": new FormControl("", [Validators.required]),
    });
  }

  saveCustomer(): void {
    if (this.customerFormGroup.valid) {
      this.customer = this.customerFormGroup.value;
      this.customerService.saveCustomer(this.customer);
    }
  }

  resetForm(): void {
    this.customerFormGroup.reset();
  }

}
