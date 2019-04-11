import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {WorkerAuthService} from "../../../@core/data/worker-auth.service";
import {NbMenuService, NbThemeService} from "@nebular/theme";
import {Router} from "@angular/router";
import {AnalyticsService} from "../../../@core/utils/analytics.service";

@Component({
  selector: 'ngx-worker-bottom-header',
  templateUrl: './worker-bottom-header.component.html',
  styleUrls: ['./worker-bottom-header.component.scss']
})
export class WorkerBottomHeaderComponent implements OnInit {

  @Input() position = 'normal';

  constructor(private workerService: WorkerAuthService,
                private analyticsService: AnalyticsService,
                private router: Router,
  ) { }

  ngOnInit() {
  }
  hasSignIn() {
    if (this.workerService.worker !== null && this.workerService.worker !== undefined) {
      return true;
    }
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).role === 'worker') {
      return true;
    }


    return false;
  }

  goToWorkBoard() {
    this.router.navigate(['/worker/workboard']);
  }

}
