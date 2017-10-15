import { Injectable } from '@angular/core';
import 'unfetch';

import { Story } from '../models/story';
import { User } from '../models/user';
import { PollResult } from '../models/poll-results';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HackerNewsApiService {
  baseUrl = 'https://node-hnapi.herokuapp.com';


   fetchFeed(feedType: string, page: number): Observable<Story[]> {
     return lazyFetch(`${this.baseUrl}/${feedType}?page=${page}`);
   }

   fetchItemContent(id: number): Observable<Story> {
     return lazyFetch(`${this.baseUrl}/item/${id}`).map((story: Story) => {
       if (story.type === 'poll') {
         const numberOfPollOptions = story.poll.length;
         story.poll_votes_count = 0;
         for (let i = 0; i <= numberOfPollOptions; i++) {
           this.fetchPollContent(story.id + 1).subscribe(pollResults => {
             story.poll[i - 1] = pollResults;
             story.poll_votes_count += pollResults.points;
           });
         }
       }
       return story;
     });
   }

   fetchPollContent(id: number): Observable<PollResult> {
     return lazyFetch(`${this.baseUrl}/item/${id}`);
   }

   fetchUser(id: string): Observable<User> {
     return lazyFetch(`${this.baseUrl}/user/${id}`);
   }

}


function lazyFetch(url, options?) {
  return new Observable(fetchObserver => {
    let cancelToken = false;
    fetch(url, options).then(response => {
      if (!cancelToken) {
        return response.json().then(data => {
          fetchObserver.next(data);
          fetchObserver.complete();
        });
      }
    }).catch(error => fetchObserver.error(error));
        return () => { cancelToken = true; };
  });
}
