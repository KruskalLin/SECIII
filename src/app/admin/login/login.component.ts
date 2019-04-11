import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AdminService} from "../../@core/data/admin.service";

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  status: string;
  check = false;

  constructor(
    private router: Router,
    private adminAuthService: AdminService
  ) { }

  ngOnInit() {
    this.user = {username: '', password: ''};
    this.adminAuthService.logout();
    if (localStorage.getItem('admin_username') !== undefined) {
      this.user.username = localStorage.getItem('admin_username');
      this.user.password = localStorage.getItem('admin_password');
      this.check = true;
    }


  }

  login() {


    this.adminAuthService.login(this.user)
      .subscribe(
        data => {
          if (this.check === true) {
            localStorage.setItem('admin_username', this.user.username);
            localStorage.setItem('admin_password', this.user.password);
          }else {
            localStorage.removeItem('admin_username');
            localStorage.removeItem('admin_password');
          }
          this.router.navigate(['/admin']);
        },
        error => {
          this.status = error.status;
        });
  }

}
