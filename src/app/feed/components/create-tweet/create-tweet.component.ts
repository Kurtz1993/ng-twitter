import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.scss'],
})
export class CreateTweetComponent implements OnInit {
  @Output()
  create = new EventEmitter<string>();

  tweetBody = '';

  get characterCount(): number {
    return this.tweetBody.length;
  }

  constructor() {}

  ngOnInit() {}

  createTweet(body: string): void {
    this.create.emit(body);
    this.tweetBody = '';
  }
}
