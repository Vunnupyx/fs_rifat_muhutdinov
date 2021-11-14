import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'appHideShowCatsPipe'})
export class HideShowCatsPipe implements PipeTransform {

  transform(items: any[], hide: boolean): any[] {
    if (!items) {
      return [];
    }
    if (hide) {
      return items.filter((animal) => {
        return animal.type !== 'Котик';
      });
    } else return items
  }
}
