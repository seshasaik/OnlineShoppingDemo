import { Component, OnInit } from '@angular/core';
import { GoodsReceiptNotesService } from '../../service/goods-receipt-notes.service';
import { PurchaseOrderService } from 'src/app/feature/purchase-order/service/purchase-order.service';
import { PurchaseOrder } from 'src/app/model/purchase-order';
import { MatSelectChange, MatTableDataSource } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PurchaseOrderItem } from 'src/app/model/purchase-order-item';

@Component({
  selector: 'app-create-goods-receipt',
  templateUrl: './create-goods-receipt.component.html',
  styleUrls: ['./create-goods-receipt.component.css']
})
export class CreateGoodsReceiptComponent implements OnInit {

  pendingPurchaserOrderList: PurchaseOrder[];
  GRNFormGroup: FormGroup;
  goodsReceiptItemsDataSource: MatTableDataSource<PurchaseOrderItem>;
  columnsToDisplay: string[] = ['Sno', 'productName', 'RequestedQty', 'ReceivedQty', 'cost', 'worth']

  constructor(private goodsReceiptNoteServeice: GoodsReceiptNotesService,
    private purchaseOrderService: PurchaseOrderService,
    private fb: FormBuilder) {

    this.goodsReceiptItemsDataSource = new MatTableDataSource([]);
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
    return this.purchaseOrderService.getPurchaseOrederById(selection.value)
  }

}
