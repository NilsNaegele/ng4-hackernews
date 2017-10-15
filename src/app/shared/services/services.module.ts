import { NgModule } from '@angular/core';
import { HackerNewsApiService } from './hackernews-api.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: []
})
export class ServicesModule {
  static forRoot() {
    return {
            ngModule: ServicesModule,
            providers: [ HackerNewsApiService ]
    };
  }
}

export { HackerNewsApiService };
