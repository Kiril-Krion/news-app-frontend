import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/shared/models/posts.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent implements OnInit {
  @Input() allPosts: Posts[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
