import { Injectable } from '@angular/core';
import { Product } from '../../../model/product';
import { Supplier } from '../../../model/supplier';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { BaseAPIURLService } from 'src/app/services/base-apiurl.service';
import { Observable, of, throwError } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { MessagingService } from '../../messaging/messaging.service';
import { Message } from '../../messaging/message';

@Injectable()
export class ProductService {

  products: Product[];
  constructor(private http: HttpClient, private baseApiUrlService: BaseAPIURLService, private messageSerive: MessagingService) { }

  addProduct(product: Product) {
    // this.products.push(product);
    return this.http.post(this.baseApiUrlService.getURL("/product"), product).pipe(
      switchMap((status: string) => {
        let message = new Message();
        message.messages.push("product saved successfully");
        message.timeinMills = 5 * 1000;
        this.messageSerive.addMessage(message);
        return of(true);
      }),
      catchError(this.handleError<boolean>("addProduct", false))
    );
  }

  removeProduct(productIndex: number): void {
    this.products.splice(productIndex);
  }

  updateProduct(product: Product): boolean {
    var productIndx = this.getIndexOfProduct(product);
    if (productIndx < 0)
      return false;
    this.products[productIndx] = product;
    return true;
  }

  getIndexOfProduct(product: Product): number {
    return this.products.indexOf(product);
  }

  listProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrlService.getURL("/product"));
  }

  addSupplier(productId: number, supplier: Supplier): void {
    this.products[productId].suppliers.push(supplier);
  }

  getSupplier(productId: number): Supplier[] {
    return this.products[productId].suppliers;
  }


  /*  updateSupplier(productId: number, supplier : Supplier): boolean {
     var supplier = this.products[productId].suppliers.splice(supplierIndex);
     return supplier.length > 0;
   } */

  removeSupplier(productId: number, supplierIndex: number): boolean {
    var supplier = this.products[productId].suppliers.splice(supplierIndex);
    return supplier.length > 0;
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any) => {
      return of(result as T);
    }
  }

}
