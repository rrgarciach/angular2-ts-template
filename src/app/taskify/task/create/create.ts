/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />

import {Inject, Component, View} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from 'angular2/router';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';

@Component({
    selector: 'task-create'
})
@View({
    templateUrl: PATHS.taskifyPath + '/task/create/create.html',
    directives: ROUTER_DIRECTIVES
})

export class TaskCreate {
    private taskService: TaskService;
    public router: Router;
    public task:Object = {
        name: ''
    };

    constructor(@Inject(TaskService) taskService:TaskService,
                @Inject(Router) router:Router) {
        this.taskService = taskService;
        this.router = router;
    }

    public create():void {
        this.taskService.createTask(this.task)
            .subscribe(() => {
                this.router.navigateByUrl('/');
            })
    }
}