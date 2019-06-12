import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  get isLoggedIn() {
    return !!this.jwt.tokenGetter();
  }

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  login(email: string, password: string): Observable<null> {
    return this.http
      .post<{ token: string }>(`${environment.apiUrl}/auth`, { email, password })
      .pipe(
        tap((data: { token: string }) => localStorage.setItem('token', data.token)),
        map(() => null)
      );
  }

  logout() {
    localStorage.clear();
  }
}
