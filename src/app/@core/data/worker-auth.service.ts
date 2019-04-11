import { Injectable } from '@angular/core';
import {ApiConfig} from "./api-config";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable()
export class WorkerAuthService {
  public token: string;
  worker: any;

  constructor(
    private config: ApiConfig,
    private http: HttpClient,
    private router: Router
  ) {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.token = currentUser && currentUser.token;
  }

  login(user) {
    return this.http.get<any>(this.config.login_url + '/' + '?username=' + user.username + '&password=' + user.password)
      .map((response: Response) => {
        const token = response && response['token'];
        if (token) {
          this.token = token;
          localStorage.setItem('user', JSON.stringify({ username: user.username, token: token, role: 'worker' }));
          this.worker = user;
          return true;
        } else {
          return false;
        }
      });
  }
  //
  // login(user) {
  //   this.worker = { username: 'Lim Kruscal', password: '???', points: 0};
  //   localStorage.setItem('currentWorker', JSON.stringify({ username: this.worker.username, token: 'fake' }));
  //    return true;
  // }

  logout() {
    this.token = null;
    this.worker = null;
    localStorage.removeItem('user');
  }

  register(user) {
    const self = this;
    return this.http.post(this.config.register_url, user).map((response: Response) => {
      self.router.navigate(['/worker/login']);
      localStorage.removeItem('user');
    });
  }
  update(user) {
    return this.http.post<any>(this.config.register_url + user.username, user);
  }





}
