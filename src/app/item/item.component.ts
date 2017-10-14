import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {
  @Input() item;

  get hasUrl(): boolean {
    return this.item.url.indexOf('http://') === 0 || this.item.url.indexOf('https://') === 0;
  }

}
