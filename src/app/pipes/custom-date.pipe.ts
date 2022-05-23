import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (!args.length) {
      value;
    }
    return moment(value).format(args[0]);
  }

}
