import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'datePipe',
  pure: false
})
export class DatePipe implements PipeTransform {
  constructor(public translate: TranslateService) {
  }

  transform(value: string | Date, ...args: unknown[]): string {
    let date = moment(value);
    if (!date.isValid()) {
      return 'unknown';
    }
    switch (this.translate.currentLang) {
      case 'en':
        return date.format('DD MMM, YYYY').toString();
      case 'fa':
        return date.format('jYYYY/jMM/jDD').toString();
      default:
        return 'unknown';
    }
  }

}
