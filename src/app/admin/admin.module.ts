import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { AllTaskListComponent } from './all-task-list/all-task-list.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {AdminRoutingModule} from "./admin-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {WorkerRoutingModule} from "../worker/worker-routing.module";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {ThemeModule} from "../@theme/theme.module";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {NbAccessChecker} from "@nebular/security";
import {AdminGuard} from "./guard/admin.guard";
import { WorkerListComponent } from './worker-list/worker-list.component';
import { RequesterListComponent } from './requester-list/requester-list.component';
import { LogListComponent } from './log-list/log-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ChartsModule} from "ng2-charts";
import {LightboxModule} from "@ngx-gallery/lightbox";
import {GalleryModule} from "@ngx-gallery/core";

@NgModule({
  imports: [

    CommonModule,
    NgxDatatableModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    AngularFontAwesomeModule,
    ChartsModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot()
  ],
  declarations: [LoginComponent, AdminComponent, AllTaskListComponent, TaskDetailComponent, WorkerListComponent, RequesterListComponent, LogListComponent, DashboardComponent],
  providers: [AdminGuard]
})
export class AdminModule { }
