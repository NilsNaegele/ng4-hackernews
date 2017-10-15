import { Component, Input } from '@angular/core';

import { Story } from '../../shared/models/story';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent  {
  @Input() item: Story;

  get hasUrl(): boolean {
    return this.item.url.indexOf('http://') === 0 || this.item.url.indexOf('https://') === 0;
  }

}
