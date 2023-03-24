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
  images: string = '';
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

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit(_id: string) {
    const formData = new FormData();
    formData.append('imageUrl', this.images);
    formData.append('title', this.postForm.get('title')?.value)
    formData.append('text', this.postForm.get('text')?.value)
    const payload = this.postForm.getRawValue();

    this.postsService.editPost(formData, _id).subscribe(data => {
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
