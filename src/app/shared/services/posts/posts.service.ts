import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Comment, Posts} from '../../models/posts.model';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private apiService: ApiService) { }

  getAllPosts(): Observable<any> {
    return this.apiService.getAllPosts();
  }

  getOnePost(_id: string): Observable<any> {
    return this.apiService.getOnePost(_id);
  }

  createComment(_id: string, text: string): Observable<Comment> {
    return this.apiService.createComment(_id, text);
  }

  deletePost(_id: string): Observable<any> {
    return this.apiService.deletePost(_id);
  }
}
