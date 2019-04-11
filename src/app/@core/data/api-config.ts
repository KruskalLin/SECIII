import {Injectable} from '@angular/core';

@Injectable()
export class ApiConfig {

  private ip = '120.78.159.171:6060';

  private _api_url = 'http://' + this.ip +  '/api';

  private _rest_url = 'http://' + this.ip +  '/halapi';


  private _log_url = this._rest_url + '/taskLogs/search/findAllByDateBetweenAndType?';

  private _admin_worker_url = this._rest_url + '/workers?';

  private _gift = this._api_url + '/gift';

  private _exchange = this._gift + '/exchange';

  private _dailyBonus = '/dailyBonus';

  private _mission = '/mission';

  private _receive_mission = '/mission/receive';

  private _rank = this._api_url + '/rank';

  private _admin_requester_url = this._rest_url + '/requesters?';

  private _category_url = this._api_url + '/category';

  private _login_url = this._api_url + '/login/worker';

  private _search_url = this._api_url + '/search/task';

  private _recommend_url = this._api_url + '/recommend/task';

  private _logout_url = this._api_url + '/logout/worker';

  private _register_url = this._api_url + '/worker';

  private _worker_url = this._api_url + '/worker/';

  private _websocket = 'ws://' + this.ip + '/websocket';

  private _task_url = this._api_url + '/task';

  private _task_detail_url = this._api_url + '/task/';

  private _create_point = '/point';

  private _task_start_url = '/start/';

  private _task_submit_url = '/submit/';

  private _check_dataset = this._api_url +  '/requester/checkDataSet';

  private _optimal_dataset = '/optimalDataSet';

  private _fragmented_optimal_dataset = '/fragmentedOptimalDataSet';

  private _modify_score = '/modifyScore';

  private _requester_register_url = this._api_url + '/requester';

  private _requester_login_url = this._api_url + '/login/requester';

  private _requester_logout_url = this._api_url + '/logout/requester';

  private _requester_url = this._api_url + '/requester/';

  private _requester_task_process = '/process';

  private _admin_login_url = this._api_url + '/login/admin';

  private _admin_tasklists = this._api_url + '/admin/task';

  private _admin_review = this._api_url + '/admin/task/review/';

  private _admin_images = this._admin_tasklists + '/image?taskId=';

  private _check_data = this._api_url + '/requester/checkDataSet?';

  private _standardSet = '/standardSet';

  private _userlogin_week = this._api_url + '/chart/userlogin/week';

  private _tasksubmit_week = this._api_url + '/chart/tasksubmit/week';

  private _userlogin_24 = this._api_url + '/chart/userlogin/24h';

  private _userRegister_week = this._api_url + '/chart/userRegister/week';

  private _taskExecuteTime = this._api_url + '/chart/taskExecuteTime';

  private _taskNum = this._api_url + '/chart/taskNum';


  get userlogin_week(): string {
    return this._userlogin_week;
  }

  get tasksubmit_week(): string {
    return this._tasksubmit_week;
  }

  get userlogin_24(): string {
    return this._userlogin_24;
  }


  get admin_images(): string {
    return this._admin_images;
  }

  get userRegister_week(): string {
    return this._userRegister_week;
  }

  get taskExecuteTime(): string {
    return this._taskExecuteTime;
  }

  get taskNum(): string {
    return this._taskNum;
  }

  get mission(): string {
    return this._mission;
  }

  get gift(): string {
    return this._gift;
  }

  get exchange(): string {
    return this._exchange;
  }

  get dailyBonus(): string {
    return this._dailyBonus;
  }

  get receive_mission(): string {
    return this._receive_mission;
  }

  get rank(): string {
    return this._rank;
  }

  get standardSet(): string {
    return this._standardSet;
  }

  get create_point(): string {
    return this._create_point;
  }

  get websocket(): string {
    return this._websocket;
  }

  get check_data(): string {
    return this._check_data;
  }

  get check_dataset(): string {
    return this._check_dataset;
  }

  get optimal_dataset(): string {
    return this._optimal_dataset;
  }

  get fragmented_optimal_dataset(): string {
    return this._fragmented_optimal_dataset;
  }

  get modify_score(): string {
    return this._modify_score;
  }

  get admin_worker_url(): string {
    return this._admin_worker_url;
  }

  get admin_requester_url(): string {
    return this._admin_requester_url;
  }

  get log_url(): string {
    return this._log_url;
  }

  get recommend_url(): string {
    return this._recommend_url;
  }

  get category_url(): string {
    return this._category_url;
  }

  get admin_login_url(): string {
    return this._admin_login_url;
  }


  get admin_tasklists(): string {
    return this._admin_tasklists;
  }

  get admin_review(): string {
    return this._admin_review;
  }

  get search_url(): string {
    return this._search_url;
  }



  get requester_register_url(): string {
    return this._requester_register_url;
  }


  get requester_login_url(): string {
    return this._requester_login_url;
  }

  get requester_logout_url(): string {
    return this._requester_logout_url;
  }

  get requester_url(): string {
    return this._requester_url;
  }

  get requester_task_process(): string {
    return this._requester_task_process;
  }

  get register_url(): string {
    return this._register_url;
  }

  get worker_url(): string {
    return this._worker_url;
  }

  get task_url(): string {
    return this._task_url;
  }

  get task_detail_url(): string {
    return this._task_detail_url;
  }

  get task_start_url(): string {
    return this._task_start_url;
  }

  get task_submit_url(): string {
    return this._task_submit_url;
  }

  get login_url(): string {
    return this._login_url;
  }

  get logout_url(): string {
    return this._logout_url;
  }
}
