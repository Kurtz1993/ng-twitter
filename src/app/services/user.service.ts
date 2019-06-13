import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { RegistrationData, User } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get currentUser(): User {
    const decodedToken = this.jwt.decodeToken(this.jwt.tokenGetter());

    if (!decodedToken) { return null; }

    const user = new User(decodedToken.name, decodedToken.email, decodedToken.gravatar);

    return user;
  }

  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  register(data: RegistrationData): Observable<null> {
    return this.http.post<null>(`${environment.apiUrl}/user/create`, data);
  }
}
