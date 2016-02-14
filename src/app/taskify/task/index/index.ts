/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />

import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';
import {TaskShow} from '../show/show';
import {TaskUpdate} from '../update/update';
import {TaskCreate} from '../create/create';

@Component({
  selector: 'task-index'
})
@View({
  templateUrl: PATHS.taskifyPath + '/task/index/index.html',
  directives: ROUTER_DIRECTIVES
})
@RouteConfig([
  {path: '/', useAsDefault: true, component: TaskIndex, as: 'TaskIndex'}, // <--- Default Route
  {path: '/:id', component: TaskShow, as: 'TaskShow'},
  {path: '/update/:id', component: TaskUpdate, as: 'TaskUpdate'},
  {path: '/create', component: TaskCreate, as: 'TaskCreate'},
])
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
