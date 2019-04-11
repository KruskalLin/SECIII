import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Page} from "../../shared/paging/page";
import {AdminService} from "../../@core/data/admin.service";
import {Requester} from "../entity/requester";

@Component({
  selector: 'ngx-requester-list',
  templateUrl: './requester-list.component.html',
  styleUrls: ['./requester-list.component.scss']
})
export class RequesterListComponent implements OnInit {
  @ViewChild('taskTable') table: any;
  page = new Page();
  rows: Requester[];
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
    this.taskService.getRequesters(pageInfo.offset, 1, 'id', false).subscribe(pagedData => {
      self.page.totalPages = pagedData.page.totalPages;
      self.page.totalElements = pagedData.page.totalElements;
      self.rows = pagedData._embedded.requesters;
    });
  }


  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
  onDetailToggle(event) {

  }
}
