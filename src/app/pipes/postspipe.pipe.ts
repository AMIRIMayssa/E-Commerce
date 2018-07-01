import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postspipe'
})
export class PostspipePipe implements PipeTransform {

  transform(items: any[], term,term1): any {
    console.log('term', term);
    return term ?
    items.filter(item => item.title.toLowerCase().indexOf(term.toLowerCase()) !== -1)
    : items;
  }

}
