import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';
import { HeaderModule } from "../../shared/components/header/header.module";
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';


@NgModule({
    declarations: [
        PostComponent
    ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HeaderModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    LoaderModule
  ]
})
export class PostModule { }
