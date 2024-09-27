import { Pipe, PipeTransform } from '@angular/core';

export const BTC = 60000;

@Pipe({
  name: 'usdToBtc',
  standalone: true
})
export class UsdToBtcPipe implements PipeTransform {

  transform(amount: number, isUsdToBtc = true): number {
    return isUsdToBtc ? amount / BTC : amount * BTC;
  }

}
