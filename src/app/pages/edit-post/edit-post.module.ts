import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPostRoutingModule } from './edit-post-routing.module';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderModule} from "../../shared/components/header/header.module";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    EditPostComponent
  ],
  imports: [
    CommonModule,
    EditPostRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HeaderModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class EditPostModule { }
