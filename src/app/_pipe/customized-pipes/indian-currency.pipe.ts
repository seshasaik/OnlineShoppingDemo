import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indianCurrency'
})
export class IndianCurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    value = parseInt(value);
    let formatedStr: string[] = [];
    let i = -1;

    do {
      formatedStr.push("" + value % 10)
      if (++i > 0 && i % 2 === 0 && value >= 0) {
        formatedStr.push(", ")
        i = 0;
      }
    }
    while ((value = Math.floor(value / 10)) > 0)

    return (formatedStr.reverse()).join("").replace(/^\,/g, "");
  }

}
