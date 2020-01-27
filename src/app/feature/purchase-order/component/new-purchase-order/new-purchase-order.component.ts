import { Component, OnInit } from '@angular/core';
import { ProductViewModalComponent } from '../product-view-modal/product-view-modal.component';
import { MatDialog, MatSelectChange } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/feature/supplier/service/supplier.service';
import { ProductOrderStatus } from 'src/app/model/enums/product-order-status.enum';

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css'],
  
})
export class NewPurchaseOrderComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private fb: FormBuilder,
    private supplierService: SupplierService
  ) { }

  purchaseOrderFormGroup: FormGroup;
  suppliers: Supplier[];

  get items() {
    return this.purchaseOrderFormGroup.get("items") as FormArray;
  }

  ngOnInit() {
    this.getAllSuppliers();
    this.purchaseOrderFormGroup = this.fb.group({
      "purchaseOrderCode": this.fb.control('', [Validators.required]),
      "supplier": this.fb.control('', [Validators.required]),
      "status": this.fb.control(ProductOrderStatus.PENDING, []),
      "items": this.fb.array([])
    })


  }

  get purchaseOrderFormGroupControl() {
    return this.purchaseOrderFormGroup.controls;
  }


  getAllSuppliers() {
    let subsriber = this.supplierService.getSuppliers().subscribe(supliers => {
      this.suppliers = supliers;
    }, () => {
      subsriber.unsubscribe();
    })
  }

  openAddProductDialog(selection: MatSelectChange) {

    let supplierId = selection.value

    if (supplierId) {
      this.dialog.open(ProductViewModalComponent, {
        height: '300px',
        width: '500px',
        data: supplierId
      }).beforeClosed().subscribe((result: Product[]) => {
        if (result.length) {
          result.forEach((data: Product) => {
            this.items.push(this.fb.group({
              "product": this.fb.group({
                "id": this.fb.control(data.id),
                "name": this.fb.control(data.name)
              }),
              "orderedQty": this.fb.control('', [Validators.required, Validators.pattern('[0-9]')]),
              "cost": this.fb.control('', [Validators.required, Validators.pattern('[0-9]+(.[0-9]{2})')])
            }))
          })

        }
      })
    }




  }
  savePurcaseOrder() {

  }
}


