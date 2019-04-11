import {WorkerTaskData} from "./worker-task-data";

export class Worker {
  username: string;
  point: number;
  level: number;
  rank: number;
  taskList: WorkerTaskData[];
  contact: string;
  avatar: string;
  rankList: Map<string, string>;
  title: string;
  titleList: string[];
  exp: number;
  coin: number;
  vitality: number;
  accuracy: number;
}
