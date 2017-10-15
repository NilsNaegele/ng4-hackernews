import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Story } from '../shared/models/story';
import { HackerNewsApiService } from '../shared/services/hackernews-api.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  commentSubscription: Subscription;
  item: Story;
  errorMessage = '';

  constructor(private hackerNewsApiService: HackerNewsApiService,
              private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.commentSubscription = this.route.params.subscribe(params => {
      const itemID = +params['id'];
      this.hackerNewsApiService.fetchItemContent(itemID).subscribe(item => {
        this.item = item;
      }, error => console.error(`Unable to fetch comment: ${itemID}`));
    });
    window.scrollTo(0, 0);
  }

  goBack() {
    this.location.back();
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http://') === 0 || this.item.url.indexOf('https://') === 0;
  }

  ngOnDestroy() {
    this.commentSubscription.unsubscribe();
  }

}
