import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbDropdown, NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
} from '@nebular/theme';


import {
  FooterComponent,
  WorkerTopHeaderComponent,
  WorkerBottomHeaderComponent,
  WorkerBoardHeaderComponent,
  RequesterTopHeaderComponent,
  RequesterBottomHeaderComponent,
  RequesterBoardHeaderComponent,
  CommonHeaderComponent,
} from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe } from './pipes';
import {
  NgxWorkerLayoutComponent,
  NgxRequesterLayoutComponent,
  NgxRequesterBoardLayoutComponent,
  RequesterProfileLayoutComponent,
  NgxWorkerBoardLayoutComponent,
  WorkerProfileLayoutComponent,
  NgxAdminLayoutComponent
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import {RouterModule} from "@angular/router";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { MissionListComponent } from './components/mission-list/mission-list.component';
import {ProgressbarModule} from "ngx-bootstrap";

const BASE_MODULES = [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AngularFontAwesomeModule];

const NB_MODULES = [
  NbCardModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NgbDropdownModule,
];

const COMPONENTS = [
  FooterComponent,
  WorkerBottomHeaderComponent,
  WorkerTopHeaderComponent,
  WorkerBoardHeaderComponent,
  RequesterTopHeaderComponent,
  RequesterBottomHeaderComponent,
  RequesterBoardHeaderComponent,
  NgxWorkerLayoutComponent,
  NgxWorkerBoardLayoutComponent,
  WorkerProfileLayoutComponent,
  NgxRequesterLayoutComponent,
  NgxRequesterBoardLayoutComponent,
  RequesterProfileLayoutComponent,
  NgxAdminLayoutComponent,
  CommonHeaderComponent,
  MissionListComponent
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [DEFAULT_THEME],
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES, ProgressbarModule],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [MissionListComponent]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS, NgbDropdown],
    };
  }
}
