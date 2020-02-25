import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { SupplierService } from '../../service/supplier.service';
import { Supplier } from 'src/app/model/supplier';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {


  supplierForm: FormGroup;
  constructor(private fb: FormBuilder, private supplierService: SupplierService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.supplierForm = this.fb.group({
      "name": new FormControl('', [Validators.required]),
      "regNumber": new FormControl('', [Validators.required]),
      "mobile": new FormControl('', [Validators.required]),
      "phone": new FormControl(''),
      "address": new FormControl('', [Validators.required]),
    });
  }

  get supplierFormControl() {
    return this.supplierForm.controls;
  }

  saveSupplier() {
    let supplier: Supplier = this.supplierForm.value;
    this.supplierService.addSupplier(supplier).subscribe((status) => {
      if (status) {
        this.router.navigate(['..', 'list'], {
          relativeTo: this.activatedRoute
        });
      } else {
        this.supplierForm.setValue(supplier);
      }
    })
  }

}
