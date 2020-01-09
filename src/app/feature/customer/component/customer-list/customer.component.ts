import { Component, OnInit } from '@angular/core';
import { CustomereService } from '../../customere.service';
import { Customer } from 'src/app/model/customer';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayColumns: String[] = ['sno','name',  'gender', 'email', 'phone'];
  customerDataSource: MatTableDataSource<Customer>;

  constructor(private customerService: CustomereService) {

  }



  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((customers) => {
      this.customerDataSource = new MatTableDataSource<Customer>(customers)
    });
  }

}
