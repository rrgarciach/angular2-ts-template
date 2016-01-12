/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />

import {Inject, Component, View} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';

@Component({
    selector: 'task-show'
})
@View({
    templateUrl: PATHS.taskifyPath + '/task/show/show.html',
    directives: ROUTER_DIRECTIVES
})

export class TaskShow{
    private taskService: TaskService;
    public task:Object = {};

    constructor(@Inject(TaskService) taskService:TaskService) {
        this.taskService = taskService;

        this.taskService.getTask(1)
            .subscribe(result => {
                this.task = result;
            });
    }
}