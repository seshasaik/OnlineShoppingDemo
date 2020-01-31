import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagingService } from '../../messaging/messaging.service';
import { Router } from '@angular/router';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { GoodsReceiptNote } from 'src/app/model/goods-receipt-note';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class GoodsReceiptNotesService {

  procurment_base_api: string = "/api/procurement";

  constructor(private http: HttpClient,
    private baseAPIUrlService: BaseAPIURLService,
    private messageService: MessagingService,
    private router: Router) {


  }

  getPendingPurchaseOrders() {

  }

  saveGoodsReceiptNotes(goodsReceiptNote: GoodsReceiptNote): Observable<boolean> {
    return this.http.post(this.baseAPIUrlService.getURL(this.procurment_base_api + "/GRN/create"), goodsReceiptNote).pipe(
      switchMap((status) => {
        return of(true);
      })
    )
  }




}
