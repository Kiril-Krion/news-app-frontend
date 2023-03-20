import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePostRoutingModule } from './create-post-routing.module';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { HeaderModule } from 'src/app/shared/components/header/header.module';


@NgModule({
  declarations: [
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CreatePostRoutingModule
  ]
})
export class CreatePostModule { }
