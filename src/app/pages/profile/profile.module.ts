import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import {HeaderModule} from "../../shared/components/header/header.module";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HeaderModule,
    MatIconModule,
  ]
})
export class ProfileModule { }
