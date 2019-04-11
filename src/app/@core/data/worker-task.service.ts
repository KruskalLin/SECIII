import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toArray';
import {of} from 'rxjs/observable/of';
import {TaskDetail} from "../../worker/entity/task-detail";
import {HttpClient} from "@angular/common/http";
import {ApiConfig} from "./api-config";
import {Task} from '../../worker/entity/task';
import {TaskDataList} from "../../worker/entity/task-data-list";
import {TaskData} from "../../worker/entity/task-data";
import {SearchTask} from "../../worker/entity/searchTask";
import {Gift} from "../../worker/entity/gift";
import {Mission} from "../../worker/entity/mission";
import {Rank} from "../../worker/entity/rank";

@Injectable()
export class WorkerTaskService {
  constructor(
    private config: ApiConfig,
    private http: HttpClient,
  ) { }

  getTasks() {
    return this.http.get<Task[]>(this.config.task_url);
  }

  getTaskDetail(taskId: number) {
    return this.http.get<TaskDetail>(this.config.task_detail_url + taskId);
  }

  startTask(taskId: number, fragmentedtasksId: number) {
    return this.http.get<TaskDataList[]>(this.config.task_detail_url + taskId + this.config.task_start_url + fragmentedtasksId);
  }

  submitTask(task: TaskData[], taskId: number, fragmentedtasksId: number) {
    return this.http.post<TaskData[]>(this.config.task_detail_url + taskId + this.config.task_submit_url + fragmentedtasksId, task);
  }

  search(entity: string, page: number, size: number) {
    return this.http.get<SearchTask>(this.config.search_url + '?search=' + entity + '&page=' + page + '&size=' + size);
  }


  getRecommendTask() {
    return this.http.get<Task[]>(this.config.recommend_url);
  }

  getGift() {
    return this.http.get<Gift[]>(this.config.gift);
  }

  receiveMission(name) {
    return this.http.get(this.config.worker_url + JSON.parse(localStorage.getItem('user')).username + this.config.mission + '?missionName=' + name)
  }
  exchange() {

  }

  dailybonus() {
    return this.http.get(this.config.worker_url + JSON.parse(localStorage.getItem('user')).username + this.config.dailyBonus)
  }
  getMission() {
    return this.http.get<Mission[]>(this.config.worker_url + JSON.parse(localStorage.getItem('user')).username + this.config.mission)
  }

  getRank() {
    return this.http.get<Rank>(this.config.rank);
  }

}


