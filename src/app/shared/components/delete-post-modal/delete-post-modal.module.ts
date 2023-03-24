import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePostModalComponent } from './components/delete-post-modal/delete-post-modal.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    DeletePostModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ]
})
export class DeletePostModalModule { }
