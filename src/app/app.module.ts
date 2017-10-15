import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routes';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';

import { HackerNewsApiService } from './hackernews-api.service';


@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    ItemComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [HackerNewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
