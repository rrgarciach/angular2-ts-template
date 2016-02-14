/// <reference path="./config/paths.ts" />

import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PATHS} from './config/paths';
import {TaskRoot} from './taskify/task/task.root';

@Component({
  selector: 'app'
})
@View({
  templateUrl: PATHS.appPath + '/app.html',
  directives: ROUTER_DIRECTIVES
})
@RouteConfig([
  {path: '/tasks/...', component: TaskRoot, as: 'Tasks', useAsDefault: true}, // <--- Default Route
])
export class App {
}
