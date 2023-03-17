import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginForm, RegisterForm } from '../models/auth.model';
import { Posts } from '../models/posts.model';

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
  public getUser(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/auth/me`);
  }
  public getAllPosts(): Observable<Posts> {
    return this.http.get<Posts>(`${this.apiUrl}/posts`);
  }
}
