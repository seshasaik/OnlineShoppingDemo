import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ProductService } from '../../service/product-service.service';
import { Supplier } from 'src/app/model/supplier';
import { ProductFeature } from 'src/app/model/product-feature';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  supplierListModelStatus: boolean = false;
  productForm: FormGroup;
  suppliers: Supplier[] = [];
  // featuresAtIndx

  @ViewChild("confirmationDialog", {
    static: true
  })
  confirmationDialogTemplateRef: TemplateRef<any>;
  confirmationDialogRef: MatDialogRef<any>;

  constructor(private productService: ProductService, private fb: FormBuilder, public confirmationDialog: MatDialog) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      "name": new FormControl('', [Validators.required]),
      "description": new FormControl('', [Validators.required]),
      "status": new FormControl('', [Validators.required]),
      "features": this.fb.array([
      ])
    })


  }

  // feature control
  get features() {

    return this.productForm.get('features') as FormArray;
  }

  //getFeatureAtIndx

  featuresAtIndx(indx) {
    return this.features.controls[indx] as FormControl;
  }

  addFeature() {
    if (this.features.valid)

      this.features.push(this.fb.group({
        "feature": this.fb.control('', [Validators.required]),
        "order": this.fb.control('', [Validators.required])
      }));
  }

  removeFeature(featureIndx: number) {

    // let productFeature: ProductFeature = this.featuresAtIndx(this.featuresAtIndx).value

    // if (!(productFeature.feature && productFeature.order)) {
    //   this.features.removeAt(featureIndx);
    //   return;
    // }


    this.confirmationDialogRef = this.confirmationDialog.open(this.confirmationDialogTemplateRef, {
      panelClass: 'customer-detail-dialog',
      height: '200px',
      width: '500px'
    });
    const removeFeatureCnfrmDilgsubsribe = this.confirmationDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.features.removeAt(featureIndx);
      }
      return () => {
        removeFeatureCnfrmDilgsubsribe.unsubscribe();
      };
    })
  }

  addSupplier(supplier: Supplier) {
    this.suppliers.push(supplier)
  }

  removeSupplier(indx: number) {
    this.confirmationDialogRef = this.confirmationDialog.open(this.confirmationDialogTemplateRef, {
      panelClass: 'customer-detail-dialog',
      height: '200px',
      width: '500px'
    });
    const removeFeatureCnfrmDilgsubsribe = this.confirmationDialogRef.afterClosed().subscribe((data) => {
      if (data) {
        this.suppliers.splice(indx, 1);
      }
      return () => {
        removeFeatureCnfrmDilgsubsribe.unsubscribe();
      };
    })

  }

  openSupplierModle() {
    this.supplierListModelStatus = true;
  }

  closeSupplierModel($event) {
    this.supplierListModelStatus = false;
    let supplierList = $event as Array<Supplier>;

    //Filter the newly selected suppliers from existed suppliere if found
    if (this.suppliers.length)
      supplierList = supplierList.filter((val) => {
        return !this.suppliers.filter((val1) => {
          return val.id === val1.id
        }).length;
      })
    this.suppliers = this.suppliers.concat(supplierList);
  }


  saveProduct() {
    if (this.productForm.valid) {
      let product: Product = this.productForm.value
      product.suppliers = this.suppliers;
      this.productService.addProduct(product).subscribe((status) => {
        if (status) {
          this.features.clear();
          this.suppliers = [];
          this.productForm.reset();
        }
      })
    }
  }


}
