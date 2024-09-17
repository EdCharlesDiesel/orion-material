import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }

  // logout(): Observable<any> {
  //   return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  // }

  // login(user: any) {
  //   return this.http.post<any>(this.loginUrl, user);
  // }

  // register(user: any) {
  //   return this.http.post<any>(this.registerUrl, user);
  // }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this['router'].navigate(['/login']);
  }

  // refreshToken(): Observable<LoginModel | null> {
  //   const refresh_token = localStorage.getItem('refresh_token');
  //   if (!refresh_token) {
  //     return of();
  //   }

  //   type NewType = LoginResponse;

  //   return this.http.post<NewType>(
  //     `${environment.apiUrl}/token/refresh`, {refresh_token}, this.CONTEXT)
  //     .pipe(
  //       catchError(() => of()),
  //       tap(data => {
  //         const loginSuccessData = data as LoginSuccess;
  //         this.storeTokens(loginSuccessData);
  //         this.scheduleTokenRefresh(loginSuccessData.token);
  //       })
  //     );
  // }
}