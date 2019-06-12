import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { RegistrationData } from '@app/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(data: RegistrationData): Observable<null> {
    return this.http.post<null>(`${environment.apiUrl}/user/create`, data);
  }

  login(email: string, password: string): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/auth`, { email, password }).pipe(
      tap((data: any) => localStorage.setItem('token', data.token)),
      map((data: any) => data.token)
    );
  }
}
