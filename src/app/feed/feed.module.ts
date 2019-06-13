import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent, TweetComponent, CreateTweetComponent } from './components';

@NgModule({
  declarations: [FeedComponent, TweetComponent, CreateTweetComponent],
  imports: [CommonModule],
})
export class FeedModule {}
