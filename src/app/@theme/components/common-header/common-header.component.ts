import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AnalyticsService} from "../../../@core/utils/analytics.service";
import {NbMenuService} from "@nebular/theme";
import {filter} from "rxjs/operators";
import {Router} from "@angular/router";
import {AdminService} from "../../../@core/data/admin.service";

@Component({
  selector: 'ngx-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(  private menuService: NbMenuService,
                private adminService: AdminService,
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
            this.adminService.logout();
            self.router.navigate(['/worker']);
          }
        },
        d => { alert(d)}
      );
    this.menuService.getSelectedItem('user-context-menu');
  }
  hasSignIn() {

    if (this.adminService.admin !== null && this.adminService.admin !== undefined) {
      this.user = this.adminService.admin;
      return true;
    }
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null) {
      this.user = JSON.parse(localStorage.getItem('user'));
      return true;
    }



    return false;
  }


}
