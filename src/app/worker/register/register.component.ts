import { Component, OnInit } from '@angular/core';
import {WorkerAuthService} from "../../@core/data/worker-auth.service";
import {Router} from "@angular/router";
import * as _swal from 'sweetalert'
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerEntity: any;
  status: string = '';


  constructor(
    private router: Router,
    private workerAuthService: WorkerAuthService
  ) { }

  ngOnInit() {
    this.registerEntity = {username: '', password: '', confirmPassword: ''};
  }

  register() {
    const self = this;
    this.workerAuthService.register({
      username: this.registerEntity.username,
      password: this.registerEntity.password
    }).subscribe(
      data => {
        self.router.navigate(['/worker/login']);
        swal('注册成功', '点击关闭窗口', 'success');
      },
      error => {
        this.status = error.status;
      });
  }

  checkPassword() {
    return this.registerEntity.password === this.registerEntity.confirmPassword;
  }

}
