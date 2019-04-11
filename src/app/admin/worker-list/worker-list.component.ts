import {Component, OnInit, ViewChild} from '@angular/core';
import {Page} from "../../shared/paging/page";
import {Task} from "../../worker/entity/task";
import {Router} from "@angular/router";
import {AdminService} from "../../@core/data/admin.service";
import {Worker} from "../entity/worker";

@Component({
  selector: 'ngx-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {

  @ViewChild('taskTable') table: any;
  page = new Page();
  rows: Worker[];
  expanded: any = {};
  timeout: any;
  search: string = '';
  constructor(private taskService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.setPage({ offset: 0 });
  }

  setPage(pageInfo) {
    const self = this;
    this.page.pageNumber = pageInfo.offset;
    this.page.size = 1;
    this.taskService.getWorkers(pageInfo.offset, 1, 'id', false).subscribe(pagedData => {
      self.page.totalPages = pagedData.page.totalPages;
      self.page.totalElements = pagedData.page.totalElements;
      self.rows = pagedData._embedded.workers;
    });
  }


  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event) {

  }
}
