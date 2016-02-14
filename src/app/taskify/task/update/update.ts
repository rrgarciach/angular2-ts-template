/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />
/// <reference path="../task.model.ts" />

import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, RouteParams} from 'angular2/router';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';
import {TaskModel} from '../task.model';

@Component({
  selector: 'task-update'
})
@View({
  templateUrl: PATHS.taskifyPath + '/task/update/update.html',
  directives: ROUTER_DIRECTIVES
})

export class TaskUpdate {
  public router: Router;
  public task: TaskModel = new TaskModel();

  private taskService: TaskService;

  constructor(taskService: TaskService,
              router: Router,
              params: RouteParams) {
    this.taskService = taskService;
    this.router = router;

    this.taskService
      .getTask(parseInt(params.get('id')))
      .subscribe(result => {
        this.task = result;
      });
  }

  public update(): void {
    this.taskService
      .updateTask(this.task)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
}
