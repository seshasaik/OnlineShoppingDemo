import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PurchaseOrder } from 'src/app/model/purchase-order';
import { PurchaseOrderService } from '../../service/purchase-order.service';
import { PurchaseOrderStatus } from 'src/app/model/enums/purchase-order-status.enum';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {


  statusEnum = PurchaseOrderStatus;
  purchaseOrderDataSource: MatTableDataSource<PurchaseOrder>;
  columnsToDisplay: string[] = ['sno', 'code', 'worth', 'supplier', 'createdDate', 'status', 'createdBy',]
  constructor(private procurementService: PurchaseOrderService) {

    this.purchaseOrderDataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    let purchaseOrderSubsriber = this.procurementService.getPurchaseOreders().subscribe((purchaseOrders: PurchaseOrder[]) => {
      this.purchaseOrderDataSource.data = purchaseOrders;
      this.purchaseOrderDataSource._updateChangeSubscription()
    }, () =>
      purchaseOrderSubsriber.unsubscribe()
    )
  }

}
