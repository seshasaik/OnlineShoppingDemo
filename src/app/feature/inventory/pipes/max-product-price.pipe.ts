import { Pipe, PipeTransform } from '@angular/core';
import { Inventory } from 'src/app/model/inventory';
import { ProductStock } from 'src/app/model/product-stock';
import { Observable, of, from } from 'rxjs';
import { switchMap, max, map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';

@Pipe({
  name: 'maxProductPrice'
})
export class MaxProductPricePipe implements PipeTransform {

  transform(value: ProductStock[], ...args: any[]): Observable<String> {

    return from(value).pipe(
      max<ProductStock>((stock1, stock2) => {
        return stock1.mrp < stock2.mrp ? 1 : -1
      }),
      map((maxProdcutStockPrice: ProductStock) => {
        return maxProdcutStockPrice.mrp.toFixed(2);
      })
    )

    // return of<ProductStock[]>(value).pipe(
    //   switchMap<ProductStock[], Observable<String>>((productStock: ProductStock[]) => {


    //     let maxProductStockPrice = productStock.reduce((previousStock: ProductStock, currentStock: ProductStock) => {
    //       if (previousStock.mrp >= currentStock.mrp) {
    //         return previousStock;
    //       }
    //       return currentStock;
    //     })
    //     return of(maxProductStockPrice.mrp.toFixed(2));
    //   })
    // )

  }

}
