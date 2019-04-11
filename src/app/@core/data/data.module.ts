import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkerAuthService} from "./worker-auth.service";
import {RequesterAuthService} from "./requester-auth.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./JwtInterceptor";
import {ApiConfig} from "./api-config";
import {WorkerProfileService} from "./worker-profile.service";
import {WorkerTaskService} from "./worker-task.service";
import {RequesterProfileService} from "./requester-profile.service";
import {RequesterTaskService} from "./requester-task.service";
import {AdminService} from "./admin.service";
import {ChartsService} from "./charts.service";

const SERVICES = [
  WorkerAuthService,
  RequesterAuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
  },
  ApiConfig,
  WorkerProfileService,
  WorkerTaskService,
  RequesterProfileService,
  RequesterTaskService,
  AdminService,
  ChartsService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
  declarations: [],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
