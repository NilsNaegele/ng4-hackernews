import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'comment',
  pure: true
})
export class CommentPipe implements PipeTransform {
  transform(comment: number): string {
    if (comment > 0) {
      return `${comment}`;
    }
    return 'discuss';
  }
}
