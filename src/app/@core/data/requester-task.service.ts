import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ApiConfig} from "./api-config";
import {TaskDetail} from "../../requester/entity/task-detail";
import {of} from "rxjs/observable/of";
import {CreateTask} from "../../requester/entity/create-task";
import {RequestOptions} from "@angular/http";
import {TaskDataList} from "../../worker/entity/task-data-list";

@Injectable()
export class RequesterTaskService {

  constructor(
    private config: ApiConfig,
    private http: HttpClient,
  ) { }



  getCategory() {
    return this.http.get(this.config.category_url);
  }


  createTask(task: CreateTask) {
    return this.http.post(this.config.task_url, task);
  }

  getProcess(taskId: number) {
    return this.http.get<TaskDetail>(this.config.task_detail_url + taskId + this.config.requester_task_process);
  }

  checkDataSet(username: string, id: number) {
    return this.http.get<TaskDataList[]>(this.config.check_dataset + '?username=' + username + '&fragmentedtaskid=' + id);
  }

  getOptimalData(taskId) {
    return this.http.get<TaskDataList[]>(this.config.task_detail_url + taskId + this.config.requester_task_process + this.config.optimal_dataset);
  }

  postStandardSet(taskId, data) {
    return this.http.post(this.config.task_detail_url + taskId + this.config.standardSet, data);
  }
  getStandardSet(taskId) {
    return this.http.get<TaskDataList[]>(this.config.task_detail_url + taskId + this.config.standardSet);
  }


  postPoint(taskId, point) {
    return this.http.post(this.config.task_detail_url + taskId + this.config.create_point, { point:  point});
  }

  getPoint(taskId) {
    return this.http.get(this.config.task_detail_url + taskId + this.config.create_point);
  }




}
