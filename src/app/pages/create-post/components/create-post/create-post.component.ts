import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../../../../shared/services/posts/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    const payload = this.postForm.getRawValue();

    this.postsService.createPost(payload).subscribe(data => {
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
