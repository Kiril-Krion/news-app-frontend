import { PostsService } from './../../../../shared/services/posts/posts.service';
import { DestroySubscription } from './../../../../shared/helpers/destroy-subscription';
import { takeUntil } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';
import {Posts} from "../../../../shared/models/posts.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent extends DestroySubscription implements OnInit {
  userData: any;
  allPosts: Posts[] | undefined;

  constructor(private userService: UserService, private postsService: PostsService) {
    super();
  }

  ngOnInit(): void {
    this.saveUserData();
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.allPosts = data;
    })
  }


  private saveUserData() {
    this.userService.getUser().pipe(takeUntil(this.destroyStream$)).subscribe((data) => {
      localStorage.setItem('user', JSON.stringify(data));
    });
  }
}
