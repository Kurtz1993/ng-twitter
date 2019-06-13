import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Tweet } from '@app/feed/models/tweet.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input()
  tweets: Tweet[];
  @Output()
  createTweet = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
