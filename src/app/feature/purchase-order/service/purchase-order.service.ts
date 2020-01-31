import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Observer } from 'rxjs';
import { Product } from 'src/app/model/product';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { PurchaseOrder } from 'src/app/model/purchase-order';
import { MessagingService } from '../../messaging/messaging.service';
import { Message } from '../../messaging/message';

@Injectable()
export class PurchaseOrderService {

  procurment_base_api: string = "/api/procurement";
  constructor(private http: HttpClient,
    private baseApiURLServie: BaseAPIURLService,
    private messageService: MessagingService
  ) { }


  getPurchaseOreders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.baseApiURLServie.getURL(this.procurment_base_api + "/purchaseOrders")).pipe(
      catchError(this.handleHttpError("get Purchase Oreder ", []))
    )
  }

  getPendingPurchaseOreders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.baseApiURLServie.getURL(this.procurment_base_api + "/purchaseOrders/pending")).pipe(
      catchError(this.handleHttpError("get Purchase Oreder ", []))
    )
  }

  getPurchaseOrederById(id: string): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>(this.baseApiURLServie.getURL(this.procurment_base_api + `/purchaseOrders/${id}`)).pipe(
      catchError(this.handleHttpError("get Purchase Oreder By id", null))
    )
  }

  savePurchaseOreder(purchaseOrder: PurchaseOrder): Observable<boolean> {
    return this.http.post(this.baseApiURLServie.getURL(this.procurment_base_api + "/purchaseOrder/create"), purchaseOrder).pipe(
      switchMap(() => {
        let message = new Message();
        message.autoClose = true
        message.timeinMills = 5 * 1000;
        message.messages.push(`purcahse order created successfully`)
        this.messageService.addMessage(message);
        return of(true);
      }),
      catchError(this.handleHttpError("save Purchase Oreder", false))
    )
  }

  getProducts(supplierId: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiURLServie.getURL("/product/supplierId"), {
      params: { 'supplierId': supplierId }
    }).pipe(
      tap((products) => { console.log("product length " + products.length) }),
      catchError(this.handleHttpError("get Products ", []))
    )
  }

  private handleHttpError<T>(operation: string, result?: T) {
    return (error: any) => {
      console.log(error);
      return of(result as T);
    }
  }

}
