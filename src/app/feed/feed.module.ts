import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FeedComponent, TweetComponent, CreateTweetComponent } from './components';
import { RelativeDatePipe } from './pipes/relative-date.pipe';
import { SharedModule } from '@app/shared/shared.module';

const components = [
  FeedComponent,
  TweetComponent,
  CreateTweetComponent,
  RelativeDatePipe
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [...components],
})
export class FeedModule {}
