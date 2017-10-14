import { Component, OnInit } from '@angular/core';

import { HackerNewsApiService } from '../hackernews-api.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;

  constructor(private hackerNewsApiService: HackerNewsApiService) {
  }

  ngOnInit() {
      this.hackerNewsApiService.fetchStories()
                               .subscribe(
                                 items => this.items = items,
                                 error => console.log('Error fetching stories'));

  }

}
