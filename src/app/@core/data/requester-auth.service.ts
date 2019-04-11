import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiConfig} from "./api-config";
import {Router} from "@angular/router";

@Injectable()
export class RequesterAuthService {

  public token: string;
  requester: any;

  constructor(
    private config: ApiConfig,
    private http: HttpClient,
    private router: Router
  ) {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    this.token = currentUser && currentUser.token;

  }


  fuck(sb) {
    return sb;
  }
  login(user) {
    const self = this;
    return this.http.get<any>(this.config.requester_login_url + '/' + '?username=' + user.username + '&password=' + user.password)
      .map((response: Response) => {
        const token = response && response['token'];
        if (token) {
          this.token = token;
          localStorage.setItem('user', JSON.stringify({ username: user.username, token: token, role: 'requester' }));
          this.requester = user;
          return true;
        } else {
          return false;
        }
      });
  }

  // login(user) {
  //   this.requester = { username: 'Lim Kruscal', password: '???', points: 0};
  //   localStorage.setItem('currentRequester', JSON.stringify({ username: this.requester.username, token: 'fake' }));
  //   return true;
  // }

  logout() {
    this.token = null;
    this.requester = null;
    localStorage.removeItem('user');
  }

  register(user) {
    const self = this;
    return this.http.post(this.config.requester_register_url, user).map((response: Response) => {
      self.router.navigate(['/requester/login']);
      localStorage.removeItem('user');
    });
  }

  update(user) {
    return this.http.post<any>(this.config.register_url + user.username, user);
  }

}
