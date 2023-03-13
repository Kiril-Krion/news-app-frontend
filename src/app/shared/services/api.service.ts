import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginForm, RegisterForm } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:4444';

  constructor(private http: HttpClient) {}

  public login(payload: LoginForm): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, payload).pipe(map(response => {
      localStorage.setItem('token', response.token);
    }))
  }
  public register(payload: RegisterForm): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, payload).pipe(map(response => {
      localStorage.setItem('token', response.token);
    }));
  }
}
