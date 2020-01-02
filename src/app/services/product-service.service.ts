import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Supplier } from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products: Product[];
  constructor() { }

  addProduct(product: Product): void {
    this.products.push(product);
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

  listProduct(): Product[] {
    return this.products;
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

}
