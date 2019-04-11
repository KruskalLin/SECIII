import { Injectable } from '@angular/core';
import {ApiConfig} from "./api-config";
import {HttpClient} from "@angular/common/http";
import {Requester} from "../../requester/entity/requester";

@Injectable()
export class RequesterProfileService {

  constructor(private config: ApiConfig, private http: HttpClient ) { }

  update(user) {
    return this.http.post<any>(this.config.requester_url +  JSON.parse(localStorage.getItem('user')).username, user);
  }


  getDetail(username) {
    return this.http.get<Requester>(this.config.requester_url + username);
  }



}
