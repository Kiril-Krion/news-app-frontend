import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderModule } from "../../shared/components/header/header.module";
import {AllPostsModule} from "../../shared/components/all-posts/all-posts.module";

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HeaderModule,
        AllPostsModule,
    ]
})
export class DashboardModule { }
