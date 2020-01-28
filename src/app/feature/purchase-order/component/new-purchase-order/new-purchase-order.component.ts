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
  totalCost: number = 0;


  get items() {
    return this.purchaseOrderFormGroup.get("items") as FormArray;
  }

  ngOnInit() {
    this.getAllSuppliers();
    this.purchaseOrderFormGroup = this.fb.group({
      "purchaseOrderCode": this.fb.control('', [Validators.required]),
      "supplier": this.fb.control('', [Validators.required]),
      "status": this.fb.control(ProductOrderStatus.PENDING),
      // "testQty": this.fb.control('', [Validators.required, Validators.pattern('[0-9]+')]),
      "items": this.fb.array([])
    })







    // let pruchaseOrderFormGroupValueChngSubscriber = this.items.valueChanges.subscribe((observer: FormGroup[]) => {
    //   observer.forEach((ob, i) => {
    //     let contrl = ob as FormGroup;

    //     if (contrl.status === "VALID" && contrl.get("orderedQty") && contrl.get("unitPrice")) {
    //       contrl.get("cost").setValue((contrl.get("orderedQty").value * contrl.get("unitPrice").value));
    //     }

    //   })

    // }, () => {
    //   pruchaseOrderFormGroupValueChngSubscriber.unsubscribe();
    // });
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
    if (this.items)
      this.items.clear();
    if (supplierId) {
      let productViewDialogSubsriber = this.dialog.open(ProductViewModalComponent, {
        height: '450px',
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
              "orderedQty": this.fb.control('', [Validators.required, Validators.pattern('[0-9]+')]),
              "unitPrice": this.fb.control('', [Validators.required, Validators.pattern('[0-9]+([\.0-9]{2,3})?')]),
              "cost": this.fb.control(''),
            }))
          });

          this.items.controls.forEach((control) => {
            let valueSubscriber = control.valueChanges.subscribe((valuesObserver) => {
              let cost = Number(valuesObserver.orderedQty * valuesObserver.unitPrice).toFixed(2);
              
              control.get("cost").setValue(cost, {
                onlySelf: true, emitEvent: false, emitModelToViewChange: true
              });


            }, null, () => {
              valueSubscriber.unsubscribe();
            });
          })
          // let statusSubsriber = control.statusChanges.subscribe((observer) => {
          //   if (observer === "VALID") {
          //   }
          // }, null, () => {
          //   statusSubsriber.unsubscribe()
          // })


        }
      }, () => {
        productViewDialogSubsriber.unsubscribe();
      })
    }





  }

  removeProduct(indx: number) {
    this.items.removeAt(indx);
    if (this.items.length === 0) {
      let suplierFormcontrol = this.purchaseOrderFormGroupControl.supplier;
      suplierFormcontrol.setValue('');
      suplierFormcontrol.pristine;
    }
  }


  savePurcaseOrder() {

  }

  checkFormControlStatusInFormArray(indx: number) {

  }


}


