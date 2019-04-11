import {AfterContentInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from "../../../@core/utils/analytics.service";
import {NbMenuService} from "@nebular/theme";
import {WorkerAuthService} from "../../../@core/data/worker-auth.service";
import {Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'ngx-worker-top-header',
  templateUrl: './worker-top-header.component.html',
  styleUrls: ['./worker-top-header.component.scss']
})
export class WorkerTopHeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: '个人信息' }, { title: '登出' }];

  constructor(  private menuService: NbMenuService,
                private workerService: WorkerAuthService,
                private analyticsService: AnalyticsService,
                private router: Router,
                private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const self = this;
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.menuService.onItemClick()
      .pipe(filter(({ tag }) => tag === 'user-context-menu'))
      .subscribe(
        p => {
          if (p.item.title === '个人信息') {
            self.router.navigate(['/worker/workboard/profile']);
          } else if (p.item.title === '登出') {
            this.workerService.logout();
            self.router.navigate(['/worker']);
            location.reload();
          }
        },
        d => { alert(d)}
      );
    this.menuService.getSelectedItem('user-context-menu');
  }
  hasSignIn() {

    if (this.workerService.worker !== null && this.workerService.worker !== undefined) {
      this.user = this.workerService.worker;
      return true;
    }
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).role === 'worker') {
      this.user = JSON.parse(localStorage.getItem('user'));
      return true;
    }



    return false;
  }
  goToRequester() {
    this.router.navigate(['/requester']);
  }

  goToRegister() {
    this.router.navigate(['/worker/register']);
  }
  goToLogin() {
    this.router.navigate(['/worker/login']);

  }



}
