import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomereService } from '../../customere.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: Customer;
  customerFormGroup: FormGroup;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomereService) {
    this.customer = new Customer();
  }

  ngOnInit() {
    this.customer = this.activatedRoute.snapshot.data.customer;
    this.customerFormGroup = new FormGroup({
      "firstName": new FormControl(this.customer.firstName, [Validators.required]),
      "middelName": new FormControl(this.customer.middelName),
      "lastName": new FormControl(this.customer.lastName, [Validators.required]),
      "gender": new FormControl(this.customer.gender, [Validators.required]),
      "email": new FormControl(this.customer.email, [Validators.required]),
      "phone": new FormControl(this.customer.phone, [Validators.required]),
      "address": new FormControl(this.customer.address, [Validators.required]),
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
