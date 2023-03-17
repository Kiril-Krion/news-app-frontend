import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AllPostsComponent
  ],
  exports: [
    AllPostsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AllPostsModule { }
