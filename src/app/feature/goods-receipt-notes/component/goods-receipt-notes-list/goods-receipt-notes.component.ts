import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GoodsReceiptNote } from 'src/app/model/goods-receipt-note';
import { GoodsReceiptNotesService } from '../../service/goods-receipt-notes.service'

@Component({
  selector: 'app-goods-receipt-notes',
  templateUrl: './goods-receipt-notes.component.html',
  styleUrls: ['./goods-receipt-notes.component.css','../../_styles/common-styles.css']
})
export class GoodsReceiptNotesComponent implements OnInit {

  columnsToDisplay: string[] = ['sno', 'code', 'createdon', 'worth', 'receivedUser']
  GRNDataSource: MatTableDataSource<GoodsReceiptNote>
  constructor(
    private GRNService: GoodsReceiptNotesService
  ) {
    this.GRNDataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    let grnListSubsriber = this.GRNService.getGRNList().subscribe((grnList: GoodsReceiptNote[]) => {
      this.GRNDataSource.data =  grnList;
      this.GRNDataSource._updateChangeSubscription();
    }, () => {
      grnListSubsriber.unsubscribe();
    })
  }

}
