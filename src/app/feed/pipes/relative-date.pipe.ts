import { Pipe, PipeTransform } from '@angular/core';
import { distanceInWordsToNow } from 'date-fns';

@Pipe({
  name: 'relativeDate',
})
export class RelativeDatePipe implements PipeTransform {
  transform(value: string, addSuffix: boolean = true) {
    return distanceInWordsToNow(value, { addSuffix });
  }
}
