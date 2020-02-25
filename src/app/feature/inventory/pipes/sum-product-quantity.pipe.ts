import { Pipe, PipeTransform } from '@angular/core';
import { ProductStock } from 'src/app/model/product-stock';
import { Observable, of, from } from 'rxjs';
import { switchMap, map, switchMapTo, reduce } from 'rxjs/operators';

@Pipe({
  name: 'sumProductQuantity'
})
export class SumProductQuantityPipe implements PipeTransform {

  transform(value: ProductStock[], ...args: any[]): Observable<number> {
    return from(value).pipe(
      map((productStock: ProductStock) => {
        return productStock.quantity;
      }),
      reduce<number, number>((accumulatedQty: number, quantity: number) => { return accumulatedQty + quantity }, 0),
    );

  }

}
