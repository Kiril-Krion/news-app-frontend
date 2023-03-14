import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly apiService: ApiService) { }

  getUser(): Observable<any> {
    return this.apiService.getUser();
  }
}
