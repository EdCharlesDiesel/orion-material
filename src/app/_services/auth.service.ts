import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = environment.apiUrl + "/login";

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiURL, credentials);
  }

  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}
