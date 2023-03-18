import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroySubscription } from 'src/app/shared/helpers/destroy-subscription';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent extends DestroySubscription implements OnInit {
  id: string = '';
  postData: any;
  addCommentForm!: FormGroup;

  constructor(private postService: PostsService, private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
    });
    this.getOnePost(this.id);
    this.initForm();
  }

  getOnePost(_id: string) {
    this.postService.getOnePost(_id).subscribe(data => {
      this.postData = data;
    })
  }

  createComment(_id: string) {
    const text = this.addCommentForm.get('text')?.value;
    this.postService.createComment(_id, text).subscribe(data => {
      this.ngOnInit();
    });
  }

  private initForm(): void {
    const fb = this.fb;
    this.addCommentForm = fb.group({
      text: fb.control(null, [Validators.required, Validators.minLength(3)])
    })
  }

}
