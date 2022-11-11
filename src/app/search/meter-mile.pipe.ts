import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meterMile'
})
export class MeterMilePipe implements PipeTransform {
  transform(value: number): string {
    return (value/1609.344).toFixed(2);
  }
}
