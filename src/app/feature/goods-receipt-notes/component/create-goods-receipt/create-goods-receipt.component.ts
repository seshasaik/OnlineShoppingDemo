import { Component, OnInit } from '@angular/core';
import { GoodsReceiptNotesService } from '../../service/goods-receipt-notes.service';
import { PurchaseOrderService } from 'src/app/feature/purchase-order/service/purchase-order.service';
import { PurchaseOrder } from 'src/app/model/purchase-order';
import { MatSelectChange, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { PurchaseOrderItem } from 'src/app/model/purchase-order-item';
import { GoodsReceiptNote } from 'src/app/model/goods-receipt-note';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-goods-receipt',
  templateUrl: './create-goods-receipt.component.html',
  styleUrls: ['./create-goods-receipt.component.css', '../../_styles/common-styles.css']
})
export class CreateGoodsReceiptComponent implements OnInit {

  pendingPurchaserOrderList: PurchaseOrder[];
  GRNFormGroup: FormGroup;
  goodsReceiptItemsDataSource: MatTableDataSource<AbstractControl[]>;
  columnsToDisplay: string[] = ['Sno', 'productName', 'RequestedQty', 'ReceivedQty', 'cost', 'worth', 'action'];
  footerColumsToDisplay: string[] = ['Sno', 'worth', 'action'];
  noElementFoundColumnsToDisplay: string[] = this.footerColumsToDisplay.slice(0, 1)
  totalCost: Number = 0;

  constructor(private goodsReceiptNoteServeice: GoodsReceiptNotesService,
    private purchaseOrderService: PurchaseOrderService,
    private fb: FormBuilder,
    private route: Router,
    private activeRoute: ActivatedRoute) {

    this.goodsReceiptItemsDataSource = new MatTableDataSource<AbstractControl[]>([]);
  }

  ngOnInit() {
    this.GRNFormGroup = this.fb.group(
      {
        "GRNCode": this.fb.control('', [Validators.required]),
        "purchaseOrderId": this.fb.control('', [Validators.required]),
        "goodsReceiptItems": this.fb.array([], [Validators.required])
      }
    )



    let pendingOrderSubscriber = this.purchaseOrderService.getPendingPurchaseOreders().subscribe((pendingPurchaseOrderList: PurchaseOrder[]) => {
      this.pendingPurchaserOrderList = pendingPurchaseOrderList;
    }, () => {
      pendingOrderSubscriber.unsubscribe()
    })
  }

  get goodsReceiptItems() {
    return this.GRNFormGroup.get("goodsReceiptItems") as FormArray;
  }



  getPendingPurchaserOrders(selection: MatSelectChange) {
    this.goodsReceiptItems.clear();
    this.goodsReceiptItemsDataSource.data = [];
    this.goodsReceiptItemsDataSource._updateChangeSubscription();
    if (selection.value) {
      let purchaseorderByIdSubscriber = this.purchaseOrderService.getPurchaseOrederById(selection.value).subscribe((purchaseOrder: PurchaseOrder) => {
        purchaseOrder.items.forEach((item: PurchaseOrderItem) => {
          this.goodsReceiptItems.push(
            this.fb.group({
              'product': this.fb.group({
                "id": this.fb.control(item.product.id),
                "name": this.fb.control(item.product.name)
              }),
              'orderedQty': this.fb.control(item.orderedQty),
              'receivedQty': this.fb.control('', [Validators.required]),
              'unitPrice': this.fb.control(item.unitPrice),
              'cost': this.fb.control(''),
            })
          )
        });



        this.goodsReceiptItemsDataSource.data = [].concat(this.goodsReceiptItems.controls);
        this.goodsReceiptItemsDataSource._updateChangeSubscription();

        this.goodsReceiptItems.controls.forEach((item) => {
          item.get("receivedQty").valueChanges.subscribe((value) => {
            item.get("cost").setValue(Number(Number(item.get("unitPrice").value * value).toFixed(2)), {
              onlySelf: true, emitEvent: false, emitModelToViewChange: true
            });
            this.updateTotalCost();
          })
        })

      }, () => {
        purchaseorderByIdSubscriber.unsubscribe();
      })
    }



  }

  updateTotalCost() {
    this.totalCost = 0;
    this.goodsReceiptItems.controls.forEach((item) => {
      this.totalCost += item.get('cost').value;
    })
  }

  removeProduct(i: number) {
    this.goodsReceiptItems.removeAt(i);
    this.goodsReceiptItemsDataSource.data = [].concat(this.goodsReceiptItems.controls);
    this.goodsReceiptItemsDataSource._updateChangeSubscription();
    if (!this.goodsReceiptItems.controls.length) {
      this.GRNFormGroup.get("purchaseOrderId").setValue("");
    }
    this.updateTotalCost();
  }

  saveGRNForm() {
    if (this.GRNFormGroup.valid) {
      let goods: GoodsReceiptNote = this.GRNFormGroup.value;
      goods.worth = this.totalCost;
      goods.purchaseOrder = new PurchaseOrder();
      goods.purchaseOrder.id = goods.purchaseOrderId
      this.goodsReceiptNoteServeice.saveGoodsReceiptNotes(goods).subscribe((status) => {
        if (status) {
          this.GRNFormGroup.reset();
          this.goodsReceiptItems.clear();
          this.goodsReceiptItemsDataSource.data = [];
          this.goodsReceiptItemsDataSource._updateChangeSubscription();
          this.route.navigate(['..', 'list'], {
            relativeTo: this.activeRoute
          });
        }
      })
    }
  }

}
