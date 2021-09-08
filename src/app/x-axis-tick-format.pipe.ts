import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'xAxisTickFormat'
})
export class XAxisTickFormatPipe implements PipeTransform {

  transform(value: any, languageTag: string): string {
    if (languageTag) {
      if (value instanceof Date) {
        const datePipe: DatePipe = new DatePipe(languageTag);

        const date = <Date> value;
        if (date.getHours() === 0 &&
            date.getMinutes() === 0 &&
            date.getSeconds() === 0) {
          return datePipe.transform(date, 'shortDate');
        } if (date.getSeconds() !== 0) {
          return datePipe.transform(date, 'mediumTime');
        } else {
          return datePipe.transform(date, 'shortTime');
        }
      } else {
        return value.toLocaleString(languageTag);
      }
    } else {
      return value.toString();
    }
  }

}
