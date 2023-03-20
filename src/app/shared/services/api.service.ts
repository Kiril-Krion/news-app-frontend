import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { LoginForm, RegisterForm } from '../models/auth.model';
import {Comment, Posts} from '../models/posts.model';

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
  public getOnePost(_id: string): Observable<Posts> {
    return this.http.get<Posts>(`${this.apiUrl}/posts/${_id}`);
  }
  public createComment(_id: string, text: string): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/posts/${_id}/comments`, {text});
  }
  public deletePost(_id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/${_id}`, {});
  }
}
