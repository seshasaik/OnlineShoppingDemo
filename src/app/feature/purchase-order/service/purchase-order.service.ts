import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/model/product';
import { BaseAPIURLService } from 'src/app/_services/base-apiurl.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class PurchaseOrderService {

  constructor(private http: HttpClient,
    private baseApiURLServie: BaseAPIURLService
  ) { }



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
