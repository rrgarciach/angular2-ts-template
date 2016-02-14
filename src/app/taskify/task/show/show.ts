/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />

import {Component, View, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';

@Component({
  selector: 'task-show'
})
@View({
  templateUrl: PATHS.taskifyPath + '/task/show/show.html',
  directives: ROUTER_DIRECTIVES
})
export class TaskShow implements OnInit {
  public task: Object = {};
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  public ngOnInit() {
    this.taskService.getTask(1)
      .subscribe(result => {
        this.task = result;
      });
  }
}
