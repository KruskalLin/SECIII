import {Component, Input, OnInit} from '@angular/core';
import {NbMenuService, NbThemeService} from "@nebular/theme";
import {Router} from "@angular/router";
import {AnalyticsService} from "../../../@core/utils/analytics.service";
import {RequesterAuthService} from "../../../@core/data/requester-auth.service";

@Component({
  selector: 'ngx-requester-bottom-header',
  templateUrl: './requester-bottom-header.component.html',
  styleUrls: ['./requester-bottom-header.component.scss']
})
export class RequesterBottomHeaderComponent implements OnInit {
  @Input() position = 'normal';

  constructor(private requesterService: RequesterAuthService,
              private analyticsService: AnalyticsService,
              private router: Router,
  ) { }

  ngOnInit() {
  }
  hasSignIn() {

    if (this.requesterService.requester !== null && this.requesterService.requester !== undefined) {
      return true;
    }
    if (localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).role === 'requester') {
      return true;
    }

    return false;
  }

  goToWorkBoard() {
    this.router.navigate(['requester/workboard']);
  }
}

