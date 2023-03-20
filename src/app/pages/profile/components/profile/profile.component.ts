import { DestroySubscription } from './../../../../shared/helpers/destroy-subscription';
import { Posts } from './../../../../shared/models/posts.model';
import { Component, OnInit } from '@angular/core';
import {AppStateService} from "../../../../../core/app-state.service";
import {PostsService} from "../../../../shared/services/posts/posts.service";
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends DestroySubscription implements OnInit {
  userData: any;
  posts: any;

  constructor(private appState: AppStateService, private postsService: PostsService) {
    super();
  }

  ngOnInit(): void {
    this.userData = this.appState.userData;

    this.getPostsByUser(this.userData._id);
  }

  getPostsByUser(_id: string) {
    this.postsService.getPostsByUser(_id).pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.posts = data;
    });
  }

  deletePost(_id: string) {
    this.postsService.deletePost(_id).pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.ngOnInit();
    });
  }

}
