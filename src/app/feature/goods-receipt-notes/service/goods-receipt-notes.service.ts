import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessagingService } from '../../messaging/messaging.service';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { GoodsReceiptNote } from 'src/app/model/goods-receipt-note';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { Message } from '../../messaging/message';

@Injectable()
export class GoodsReceiptNotesService {

  procurment_base_api: string = "/api/procurement";

  constructor(private http: HttpClient,
    private baseAPIUrlService: BaseAPIURLService,
    private messageService: MessagingService
  ) {


  }



  saveGoodsReceiptNotes(goodsReceiptNote: GoodsReceiptNote): Observable<boolean> {
    return this.http.post(this.baseAPIUrlService.getURL(this.procurment_base_api + "/GRN/create"), goodsReceiptNote).pipe(
      switchMap<any, Observable<boolean>>(() => {
        let message = new Message();
        message.autoClose = true;
        message.timeinMills = 5 * 1000;
        message.messages.push(`Goods receipt note with code ${goodsReceiptNote.GRNCode} saved succesfully`)
        this.messageService.addMessage(message);
        return of(true);
      }),
      catchError(this.handleError("saveGoodsReceiptNotes", false))
    )
  }

  getGRNList(): Observable<GoodsReceiptNote[]> {
    return this.http.get<GoodsReceiptNote[]>(this.baseAPIUrlService.getURL(this.procurment_base_api + "/GRN"))
  }

  private handleError<T>(operation: string = "operation", result?: T) {
    return (error: any) => {

      let message = new Message();
      message.autoClose = true;
      message.timeinMills = 6 * 1000;
      message.messages.push(`Goods receipt note failed to saved `, `details : ${error.message | error}`)
      this.messageService.addMessage(message);
      return of(result as T);
    }
  }




}
