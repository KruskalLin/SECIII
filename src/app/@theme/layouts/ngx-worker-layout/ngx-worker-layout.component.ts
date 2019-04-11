import {AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from "@nebular/theme";

@Component({
  selector: 'ngx-worker-layout',
  templateUrl: './ngx-worker-layout.component.html',
  styleUrls: ['./ngx-worker-layout.component.scss'],

})
export class NgxWorkerLayoutComponent implements OnInit, AfterContentInit, OnDestroy {


  ngAfterContentInit(): void {

  }
  animate(name: string) {
    this[name] = !this[name];
  }

  ngOnInit() {

  }


  constructor(
              protected menuService: NbMenuService,
              protected themeService: NbThemeService,
              protected bpService: NbMediaBreakpointsService,
              protected sidebarService: NbSidebarService) {


  }

  ngOnDestroy() {

  }

}
