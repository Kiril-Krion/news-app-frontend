import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import {HeaderModule} from "../../shared/components/header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import { LoaderModule } from 'src/app/shared/components/loader/loader.module';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderModule,
    MatIconModule,
    MatDialogModule,
    LoaderModule
  ]
})
export class ProfileModule { }
