import { Component, OnInit } from '@angular/core';
import { ProductViewModalComponent } from '../product-view-modal/product-view-modal.component';
import { MatDialog, MatSelectChange } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormArray, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Product } from 'src/app/model/product';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/feature/supplier/service/supplier.service';
import { ProductOrderStatus } from 'src/app/model/enums/product-order-status.enum';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css'],

})
export class NewPurchaseOrderComponent implements OnInit {


  constructor(private dialog: MatDialog,
    private fb: FormBuilder,
    private supplierService: SupplierService,
    private router: Router,
    private activeRoute: ActivatedRoute
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
      "items": this.fb.array([], [this.atLeastOneProductValidator])
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
              "unitPrice": this.fb.control('', [Validators.required]), //, Validators.pattern('^[0-9]+(\.[0-9]{1,2})?')
              "cost": this.fb.control(''),
            }))
          });

          this.items.controls.forEach((control) => {
            let valueSubscriber = control.valueChanges.subscribe((valuesObserver) => {

              const regExp = new RegExp("^[0-9]+(\.[0-9]{1,2})?", "g");
              const result = regExp.exec(valuesObserver.unitPrice);
              if (result && result[1]) {
                valuesObserver.unitPrice = result[0];
                control.get("unitPrice").setValue(result[0], {
                  onlySelf: true, emitEvent: false, emitModelToViewChange: true
                });
              }
              let cost = Number(valuesObserver.orderedQty * valuesObserver.unitPrice).toFixed(2);
              control.get("cost").setValue(cost, {
                onlySelf: true, emitEvent: false, emitModelToViewChange: true
              });
              this.calculateTotalCost();
            }, null, () => {
              valueSubscriber.unsubscribe();
            });

            // let statusSubsriber = control.statusChanges.subscribe((observer) => {
            //   if (observer === "VALID") {

            //   }
            // }, null, () => {
            //   statusSubsriber.unsubscribe()
            // })

          })





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
    if(this.purchaseOrderFormGroup.valid){
      this.purchaseOrderFormGroup.value
    }
  }

  checkFormControlStatusInFormArray(indx: number) {
    this.removeProduct(indx);
  }

  calculateTotalCost() {
    this.totalCost = 0;
    this.items.controls.forEach((control) => {
      this.totalCost += Number(control.get("cost").value)
    });
  }

  atLeastOneProductValidator(control: FormArray): ValidationErrors | null {
    return control.length > 0 ? null : { 'emptyProduct': 'Purchase order conatains atleast one product' }
  }


  cancelPurchaseOrder() {
    this.router.navigate(['..', 'list'], {
      relativeTo: this.activeRoute
    });
  }
}


