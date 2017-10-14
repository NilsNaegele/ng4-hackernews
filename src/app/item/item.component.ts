import { Component, Input, OnInit } from '@angular/core';

import { HackerNewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private hackerNewsApiService: HackerNewsApiService) { }

  ngOnInit() {
    this.hackerNewsApiService.fetchItem(this.itemID).subscribe(data => {
        this.item = data;
    }, error => console.log('Could not load item ' + this.itemID));
  }

}
