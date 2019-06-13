import { Component, OnInit } from '@angular/core';

import { TweetService, UserService } from '@app/services';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tweet } from '@app/feed/models/tweet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  tweets$: Observable<Tweet[]>;

  constructor(private tweetService: TweetService, private userService: UserService) {}

  ngOnInit() {
    this.tweetService.getAllTweets().subscribe(tweets => this.tweetService.tweets$.next(tweets));
    this.tweets$ = this.tweetService.tweets$.asObservable().pipe(
      map(tweets => {
        return tweets.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
      })
    )
  }

  createTweet(body: string) {
    this.tweetService.createTweet(body).subscribe((res: any) => {
      console.log(res);
      res.data.author = this.userService.currentUser;
      this.tweetService.tweets$.next([...this.tweetService.tweets$.value, res.data]);
    });
  }
}
