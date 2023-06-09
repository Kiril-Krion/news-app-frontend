import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Comment, Posts} from '../../models/posts.model';
import { ApiService } from '../api.service';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiService: ApiService, private http: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.apiService.getAllPosts();
  }

  getOnePost(_id: string): Observable<any> {
    return this.apiService.getOnePost(_id);
  }

  getPostsByUser(_id: string): Observable<Posts> {
    return this.apiService.getPostsByUser(_id);
  }

  createComment(_id: string, text: string): Observable<Comment> {
    return this.apiService.createComment(_id, text);
  }

  deletePost(_id: string): Observable<any> {
    return this.apiService.deletePost(_id);
  }

  createPost(payload: any): Observable<any> {
    return this.apiService.createPost(payload);
  }

  editPost(payload: any, _id: string): Observable<any> {
    return this.apiService.editPost(payload, _id);
  }
}
