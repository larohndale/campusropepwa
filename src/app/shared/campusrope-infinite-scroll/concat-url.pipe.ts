import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatUrl'
})
export class ConcatUrlPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
