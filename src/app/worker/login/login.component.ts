import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {WorkerAuthService} from "../../@core/data/worker-auth.service";

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
    private workerAuthService: WorkerAuthService
  ) { }

  ngOnInit() {
    this.user = {username: '', password: ''};
    this.workerAuthService.logout();
    if (localStorage.getItem('worker_username') !== undefined) {
      this.user.username = localStorage.getItem('worker_username');
      this.user.password = localStorage.getItem('worker_password');
      this.check = true;
    }
    document.querySelector('.customised-control-description').setAttribute('style', 'color:white');


  }

  login() {


    this.workerAuthService.login(this.user)
      .subscribe(
        data => {
          if (this.check === true) {
            localStorage.setItem('worker_username', this.user.username);
            localStorage.setItem('worker_password', this.user.password);
          }else {
            localStorage.removeItem('worker_username');
            localStorage.removeItem('worker_password');
          }
          this.router.navigate(['/worker']);
        },
        error => {
          this.status = error.status;
        });
  }
}
