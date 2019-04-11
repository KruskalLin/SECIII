import { WorkerTaskData } from "../../worker/entity/worker-task-data";

export class Worker {
    username: string;
    avatar: string;
    level: number;
    point: number;
    taskList: WorkerTaskData[];
    taskExperience: Map<Number, Number>;
    _links;
}

