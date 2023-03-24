import { DestroySubscription } from './../../../../shared/helpers/destroy-subscription';
import { Posts } from './../../../../shared/models/posts.model';
import { Component, OnInit } from '@angular/core';
import {AppStateService} from "../../../../../core/app-state.service";
import {PostsService} from "../../../../shared/services/posts/posts.service";
import { takeUntil } from 'rxjs';
import {MatDialog} from "@angular/material/dialog";
import {
  DeletePostModalComponent
} from "../../../../shared/components/delete-post-modal/components/delete-post-modal/delete-post-modal.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends DestroySubscription implements OnInit {
  userData: any;
  posts: any;

  constructor(private appState: AppStateService, private postsService: PostsService, public dialogRef: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.userData = this.appState.userData;

    this.getPostsByUser(this.userData._id);
  }

  getImageUrl(url: string) {
    if (url) {
      if (url.startsWith('http://localhost:4444/')) {
        return url;
      } else if (url.startsWith('https')) {
        return url;
      } else {
        return `http://localhost:4444/${url}`;
      }
    } else {
      return url;
    }
  }

  getPostsByUser(_id: string) {
    this.postsService.getPostsByUser(_id).pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.posts = data;
    });
  }

  deletePost(_id: string) {
    this.dialogRef.open(DeletePostModalComponent, {
      data: {
        postId: _id
      }
    }).afterClosed().subscribe(data => {
      this.ngOnInit();
    })
  }

}
