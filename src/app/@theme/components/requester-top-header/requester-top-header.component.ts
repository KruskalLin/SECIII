import {Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from "../../../@core/utils/analytics.service";
import {NbMenuService} from "@nebular/theme";
import {Router} from "@angular/router";
import {RequesterAuthService} from "../../../@core/data/requester-auth.service";
import {filter} from "rxjs/operators";

@Component({
  selector: 'ngx-requester-top-header',
  templateUrl: './requester-top-header.component.html',
  styleUrls: ['./requester-top-header.component.scss']
})
export class RequesterTopHeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: '个人信息' }, { title: '登出' }];

  constructor(  private menuService: NbMenuService,
                private requesterService: RequesterAuthService,
                private analyticsService: AnalyticsService,
                private router: Router) { }

  ngOnInit() {
    const self = this;
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.menuService.onItemClick()
      .pipe(filter(({ tag }) => tag === 'requester-context-menu'))
      .subscribe(
        p => {
          if (p.item.title === '个人信息') {
            self.router.navigate(['/requester/workboard/profile']);
          } else if (p.item.title === '登出') {
            this.requesterService.logout();
            self.router.navigate(['/requester']);
            location.reload();
          }
        },
        d => { alert(d)}
      );
    this.menuService.getSelectedItem('requester-context-menu');
  }
  hasSignIn() {

    if (this.requesterService.requester !== null && this.requesterService.requester !== undefined) {
      this.user = this.requesterService.requester;
      return true;
    }
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).role === 'requester') {
      this.user = JSON.parse(localStorage.getItem('user'));
      return true;
    }



    return false;
  }
  goToWorker() {
    this.router.navigate(['/worker']);
  }
  goToLogin() {
    this.router.navigate(['/requester/login']);
  }
  goToRegister() {
    this.router.navigate(['/requester/register']);
  }

}
