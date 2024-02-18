import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json_pretty_print',
})
export class PrettyPrintPipe implements PipeTransform {
  transform(val: any): string {
    if (val === null || val === undefined) {
      return ''; // Gérer le cas où val est null ou undefined
    }
    return JSON.stringify(val, null, 2)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br>');
  }
}
