import { Component, OnInit } from '@angular/core';
import {AppStateService} from "../../../../../core/app-state.service";
import {PostsService} from "../../../../shared/services/posts/posts.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private appState: AppStateService, private postsService: PostsService) { }

  ngOnInit(): void {
    this.userData = this.appState.userData;
  }

  deletePost(_id: string) {
    this.postsService.deletePost(_id).subscribe(data => {
      console.log(data);
    });
  }

}
