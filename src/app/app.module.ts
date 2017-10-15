import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { CoreModule } from './core/core.module';
import { ServicesModule } from './shared/services/services.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { PipesModule } from './shared/pipes/pipes.module';

import { AppComponent } from './app.component';
import { FeedComponent } from './feeds/feed/feed.component';
import { ItemComponent } from './feeds/item/item.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    SharedComponentsModule,
    PipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
