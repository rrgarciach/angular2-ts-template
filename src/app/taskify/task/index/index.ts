/// <reference path="../../../config/paths.ts" />
/// <reference path="../task.service.ts" />

import {Inject, Component, View} from 'angular2/core';
import {PATHS} from '../../../config/paths';

import {TaskService} from '../task.service';

@Component({
    selector: 'task-view'
})
@View({
    templateUrl: PATHS.taskifyPath + '/task/index/index.html',
})

export class TaskIndex {
}