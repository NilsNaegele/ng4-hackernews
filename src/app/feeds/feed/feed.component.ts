import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Story } from '../../shared/models/story';
import { HackerNewsApiService } from '../../shared/services/hackernews-api.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  typeSubscription: Subscription;
  pageSubscription: Subscription;
  items: Story[];
  feedType: string;
  pageNumber: number;
  listStart: number;
  errorMessage = '';

  constructor(private hackerNewsApiService: HackerNewsApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.typeSubscription = this.route.data.subscribe(data => this.feedType = (data as any).feedType);
    this.pageSubscription = this.route.params.subscribe(params => {
      this.pageNumber = +params['page'] ? +params['page'] : 1;
      this.hackerNewsApiService.fetchFeed(this.feedType, this.pageNumber)
                               .subscribe(
                                 items => this.items = items,
                                 error => console.error(`Error loading ${this.feedType} stories`),
                                 () =>  {
                                       this.listStart = ((this.pageNumber - 1) * 30) + 1;
                                       window.scrollTo(0, 0);
                                      });
                                });
            }

  ngOnDestroy() {
    this.typeSubscription.unsubscribe();
    this.pageSubscription.unsubscribe();
  }

}
