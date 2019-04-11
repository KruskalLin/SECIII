import {Component, Input, OnInit} from '@angular/core';
import {WorkerAuthService} from "../../../@core/data/worker-auth.service";
import {Router} from "@angular/router";
import {AnalyticsService} from "../../../@core/utils/analytics.service";
import {NbMenuService, NbSidebarService} from "@nebular/theme";
import {filter} from "rxjs/operators";
import {NgbDropdownConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MissionListComponent} from "../mission-list/mission-list.component";

@Component({
  selector: 'ngx-worker-board-header',
  templateUrl: './worker-board-header.component.html',
  styleUrls: ['./worker-board-header.component.scss'],
  providers: [NgbDropdownConfig]
})
export class WorkerBoardHeaderComponent implements OnInit {

  @Input() position = 'normal';
  user: any;
  userMenu = [{ title: '个人信息' }, { title: '登出' }];

  constructor(private workerService: WorkerAuthService,
              private analyticsService: AnalyticsService,
              private router: Router,
              private menuService: NbMenuService,
              private sidebarService: NbSidebarService,
              config: NgbDropdownConfig,
              private modalService: NgbModal
  ) {
    config.placement = 'bottom-right';
    config.autoClose = false;

  }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    const self = this;
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
  }


  mission() {
    const activeModal = this.modalService.open(MissionListComponent, { size: 'lg', container: 'nb-layout' });
  }

  goToTaskList() {
    this.router.navigate(['/worker/workboard/workerhall']);
  }

  goToMessage() {
    this.router.navigate(['/worker/workboard/message']);

  }

  onKeyDown(event, text){
    if (event.key === "Enter") {
      this.router.navigate(['/worker/workboard/tasklist', {search: text, page: 0}]);
    }
  }

}
