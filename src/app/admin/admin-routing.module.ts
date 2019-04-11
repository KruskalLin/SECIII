import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {AllTaskListComponent} from "./all-task-list/all-task-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {AdminComponent} from "./admin.component";
import {AdminGuard} from "./guard/admin.guard";
import {WorkerListComponent} from "./worker-list/worker-list.component";
import {RequesterListComponent} from "./requester-list/requester-list.component";
import {LogListComponent} from "./log-list/log-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', component: AdminComponent,
    children: [
      {
        path: 'tasklist',
        component: AllTaskListComponent,
        canActivate: [AdminGuard]

      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'workers',
        component: WorkerListComponent,
        canActivate: [AdminGuard]

      },

      {
        path: 'requesters',
        component: RequesterListComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'log',
        component: LogListComponent,
        canActivate: [AdminGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminGuard]
      },


      {
        path: 'taskdetail/:id',
        component: TaskDetailComponent,
        canActivate: [AdminGuard]

      },
    ],
    canActivate: [AdminGuard]
  }
];
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(
      routes,
    ),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AdminRoutingModule { }
