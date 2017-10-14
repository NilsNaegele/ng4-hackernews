import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsApiService } from '../hackernews-api.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit, OnDestroy {
  commentSubscription: Subscription;
  item: any;

  constructor(private hackerNewsApiService: HackerNewsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.commentSubscription = this.route.params.subscribe(params => {
      const itemID = +params['id'];
      this.hackerNewsApiService.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.error(`Unable to fetch comment: ${itemID}`));
    });
  }

  ngOnDestroy() {
    this.commentSubscription.unsubscribe();
  }

}
