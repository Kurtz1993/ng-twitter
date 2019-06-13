import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent, TweetComponent, CreateTweetComponent } from './components';

const components = [FeedComponent, TweetComponent, CreateTweetComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class FeedModule {}
