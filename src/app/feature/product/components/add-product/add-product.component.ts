import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../../service/product-service.service';
import { Supplier } from 'src/app/model/supplier';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup;
  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      "name": new FormControl('', [Validators.required]),
      "description": new FormControl('', [Validators.required]),
      "status": new FormControl('', [Validators.required]),
      "features": this.fb.array([
      ]),
      "suppliers": this.fb.array([
      ])
    })


  }

  // feature control
  get features() {
    
    return this.productForm.get('features') as FormArray;
  }

  addFeature() {
    this.features.push(this.fb.group({
      "feature": this.fb.control('', [Validators.required]),
      "order": this.fb.control('', [Validators.required])
    }));
  }

  removeFeature(featureIndx: number) {
    this.features.removeAt(featureIndx);
  }

  // Supplier control
  get suppliers() {
    return this.productForm.get('suppliers') as FormArray;
  }

  addSupplier(supplier: Supplier) {
    this.suppliers.push(this.fb.group({
      "id": this.fb.control(supplier.id),
      "name": this.fb.control(supplier.name),
      "mobile": this.fb.control(supplier.mobile),
      "phone": this.fb.control(supplier.phone),
      "regNumber": this.fb.control(supplier.regNumber)
    }))
  }

  removeSupplier(indx: number) {
    this.suppliers.removeAt(indx);
  }

}
