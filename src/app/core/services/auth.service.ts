import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // private token: string | null = localStorage.getItem('token');

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) {}

  /**
   * Logic for Authenticate user
   * @param email
   * @param password
   * @returns {Observable}
   */
  signIn(email: any, password: any): Observable<any> {
    const body = { email, password };
    return this.httpClient.post(`${environment.apiUrl}user/login`, body, { withCredentials: true });
  }
}