import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AnalyticsService} from "../../../@core/utils/analytics.service";
import {RequesterAuthService} from "../../../@core/data/requester-auth.service";
import {filter} from "rxjs/operators";
import {NbMenuService} from "@nebular/theme";

@Component({
  selector: 'ngx-requester-board-header',
  templateUrl: './requester-board-header.component.html',
  styleUrls: ['./requester-board-header.component.scss']
})
export class RequesterBoardHeaderComponent implements OnInit {

  @Input() position = 'normal';
  user: any;
  userMenu = [{ title: '个人信息' }, { title: '登出' }];

  constructor(private requesterService: RequesterAuthService,
              private analyticsService: AnalyticsService,
              private router: Router,
              private menuService: NbMenuService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const self = this;
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
    this.menuService.getSelectedItem('requester-context-menu');  }
  hasSignIn() {

    if (this.requesterService.requester !== null && this.requesterService.requester !== undefined) {
      this.user = this.requesterService.requester;
      return true;
    }
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      return true;
    }



    return false;
  }

}

