import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {WorkerTaskService} from "../../@core/data/worker-task.service";
import {Task} from "../../worker/entity/task";
import {Router} from "@angular/router";
import {AdminService} from "../../@core/data/admin.service";

@Component({
  selector: 'ngx-all-task-list',
  templateUrl: './all-task-list.component.html',
  styleUrls: ['./all-task-list.component.scss']
})
export class AllTaskListComponent implements OnInit, AfterContentInit {

  ngAfterContentInit(): void {
    this.fetch();
  }


  @ViewChild('taskTable') table: any;
  rows: Observable<Task[]>;
  expanded: any = {};
  timeout: any;

  constructor(private taskService: AdminService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetch();
  }

  viewDetail(item) {
    this.router.navigate(['/admin/taskdetail/' + item]);
  }
  fetch() {
    const self = this;
    this.rows = this.taskService.getTasks();
  }
  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);

  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

}
