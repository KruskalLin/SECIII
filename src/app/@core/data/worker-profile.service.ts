import { Injectable } from '@angular/core';
import {ApiConfig} from "./api-config";
import {HttpClient} from "@angular/common/http";
import {Worker} from "../../worker/entity/worker";

@Injectable()
export class WorkerProfileService {

  constructor(private config: ApiConfig, private http: HttpClient ) { }

  update(user) {
    return this.http.post<any>(this.config.register_url +  JSON.parse(localStorage.getItem('user')).username, user);
  }

  getDetail(username) {
    return this.http.get<Worker>(this.config.worker_url + username);
  }


}
