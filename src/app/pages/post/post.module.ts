import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';
import { HeaderModule } from "../../shared/components/header/header.module";
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        PostComponent
    ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HeaderModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
