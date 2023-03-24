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
  images: any;
  constructor(
    private fb: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('imageUrl', this.images);
    formData.append('title', this.postForm.get('title')?.value)
    formData.append('text', this.postForm.get('text')?.value)

    this.postsService.createPost(formData).subscribe(data => {
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
