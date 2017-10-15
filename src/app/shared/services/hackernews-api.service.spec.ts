import { TestBed, inject } from '@angular/core/testing';

import { HackerNewsApiService } from './hackernews-api.service';

describe('HackernewsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HackerNewsApiService]
    });
  });

  it('should be created', inject([HackerNewsApiService], (service: HackerNewsApiService) => {
    expect(service).toBeTruthy();
  }));
});
