import { Injectable } from '@angular/core';
import {ApiConfig} from "./api-config";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Task} from "../../worker/entity/task";
import {Observable} from "rxjs/Observable";
import {AdminList} from "../../admin/entity/list";

@Injectable()
export class AdminService {
  public token: string;
  admin: any;

  constructor(
    private config: ApiConfig,
    private http: HttpClient,
    private router: Router
  ) {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.token = currentUser && currentUser.token;

  }
  login(user) {
    const self = this;
    return this.http.get<any>(this.config.admin_login_url + '/' + '?username=' + user.username + '&password=' + user.password)
      .map((response: Response) => {
        const token = response && response['token'];
        if (token) {
          this.token = token;
          localStorage.setItem('user', JSON.stringify({ username: user.username, token: token, role: 'admin' }));
          this.admin = user;
          return true;
        } else {
          return false;
        }
      });
  }

  getImages(taskId) {
    return this.http.get<string[]>(this.config.admin_images + taskId);
  }


  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.config.admin_tasklists);
  }

  logout() {
    this.token = null;
    this.admin = null;
    localStorage.removeItem('user');
  }

  update(info) {
    const self = this;
    this.http.post(this.config.admin_review + info.taskId + '?state=' + info.state, {}).subscribe(
      p => { alert('修改成功！');  self.router.navigate(['/admin/tasklist']);  },

    );
  }


  getLogs() {

  }

  getRequesters(page: number, size: number, sort: string, asc: boolean) {
    let temp = 'asc';
    if (!asc)
      temp = 'desc';
    return this.http.get<AdminList>(this.config.admin_requester_url + "page=" + page + '&size=' + size + '&sort=' + sort + ',' + temp);
  }

  getWorkers(page: number, size: number, sort: string, asc: boolean) {
    let temp = 'asc';
    if (!asc)
      temp = 'desc';
    return this.http.get<AdminList>(this.config.admin_worker_url + "page=" + page + '&size=' + size + '&sort=' + sort + ',' + temp);
  }

}
