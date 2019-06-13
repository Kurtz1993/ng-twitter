import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from '@app/feed/models/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss'],
})
export class TweetComponent implements OnInit {
  @Input()
  tweet: Tweet;

  constructor() {}

  ngOnInit() {}
}
