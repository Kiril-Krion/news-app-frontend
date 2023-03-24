import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostsService} from "../../../../shared/services/posts/posts.service";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs";
import {DestroySubscription} from "../../../../shared/helpers/destroy-subscription";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent extends DestroySubscription implements OnInit {

  postForm!: FormGroup;
  postData: any;
  id: string = '';
  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
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
    this.postsService.getOnePost(_id).pipe(takeUntil(this.destroyStream$)).subscribe(data => {
      this.postData = data;
    })
  }

  onSubmit(_id: string) {
    const payload = this.postForm.getRawValue();

    this.postsService.editPost(payload, _id).subscribe(data => {
      this.router.navigate(['/']);
    })
  }

  private initForm(): void {
    const fb = this.fb;
    this.postForm = fb.group({
      title: fb.control(null, [Validators.required, Validators.minLength(3)]),
      text: fb.control(null, [Validators.required, Validators.minLength(3)]),
      imageUrl: fb.control('', [Validators.required]),
    });
  }

}
