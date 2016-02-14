/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />

import {Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';

@Component({
  selector: 'task-index'
})
@View({
  templateUrl: PATHS.taskifyPath + '/task/index/index.html',
  directives: ROUTER_DIRECTIVES
})
export class TaskIndex {
  public tasks: Object[] = [];
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;

    this.taskService.getTasks()
      .subscribe(result => {
        this.tasks = result;
      });
  }
}
