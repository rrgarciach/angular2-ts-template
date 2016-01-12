/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />
/// <reference path="../task.model.ts" />

import {Inject, Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location, RouteParams} from 'angular2/router';
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
    private taskService: TaskService;
    public router: Router;
    public task:TaskModel= new TaskModel();

    constructor(@Inject(TaskService) taskService:TaskService,
                @Inject(Router) router:Router,
                @Inject(RouteParams) params: RouteParams) {
        this.taskService = taskService;
        this.router = router;

        this.taskService.getTask(parseInt(params.get("id")))
            .subscribe(result => {
                this.task = result;
            });
    }

    public update():void {
        this.taskService.updateTask(this.task)
            .subscribe(() => {
                this.router.navigateByUrl('/');
            })
    }
}