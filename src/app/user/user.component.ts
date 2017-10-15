import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../shared/models/user';
import { HackerNewsApiService } from '../shared/services/hackernews-api.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  user: User;
  errorMessage = '';

  constructor(private hackerNewsApiService: HackerNewsApiService,
              private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.userSubscription = this.route.params.subscribe(params => {
              const userID = params['id'];
              this.hackerNewsApiService.fetchUser(userID).subscribe(data => {
                this.user = data;
              }, error => console.error(`Error fetching user: ${userID}`));
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

}
