import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Tweet } from '@app/feed/models/tweet.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class TweetService {
  tweets$ = new BehaviorSubject<Tweet[]>([]);

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  createTweet(body: string): Observable<Tweet> {
    return this.http.post<Tweet>(
      `${environment.apiUrl}/tweets/add`,
      { body },
      {
        headers: {
          Authorization: `Bearer ${this.jwt.tokenGetter()}`,
        },
      }
    );
  }

  getAllTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(`${environment.apiUrl}/tweets`, {
      headers: {
        Authorization: `Bearer ${this.jwt.tokenGetter()}`,
      },
    });
  }
}
