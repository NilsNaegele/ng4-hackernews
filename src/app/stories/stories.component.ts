import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsApiService } from '../hackernews-api.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit, OnDestroy {
  typeSubscription: Subscription;
  pageSubscription: Subscription;
  items: string[];
  storiesType: string;
  pageNumber: number;
  listStart: number;

  constructor(private hackerNewsApiService: HackerNewsApiService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.typeSubscription = this.route.data.subscribe(data => this.storiesType = (data as any).storiesType);
    this.pageSubscription = this.route.params.subscribe(params => {
      this.pageNumber = +params['page'] ? +params['page'] : 1;
      this.hackerNewsApiService.fetchStories(this.storiesType, this.pageNumber)
                               .subscribe(
                                 items => this.items = items,
                                 error => console.error(`Error fetching ${this.storiesType} stories`),
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
