import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostsService} from "../../../../services/posts/posts.service";
import {DestroySubscription} from "../../../../helpers/destroy-subscription";

@Component({
  selector: 'app-delete-post-modal',
  templateUrl: './delete-post-modal.component.html',
  styleUrls: ['./delete-post-modal.component.scss']
})
export class DeletePostModalComponent extends DestroySubscription implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletePostModalComponent>,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) public data: {postId: string}
  ) {
    super();
  }

  ngOnInit(): void {
  }

  deletePost() {
    this.postsService.deletePost(this.data.postId).subscribe(postId => {
      this.dialogRef.close(postId);
    })
  }

  close() {
    this.dialogRef.close();
  }

}
