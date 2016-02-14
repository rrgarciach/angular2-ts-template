/// <reference path="./config/paths.ts" />

import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {PATHS} from './config/paths';
import {TaskIndex} from './taskify/task/index/index';

@Component({
  selector: 'app'
})
@View({
  templateUrl: PATHS.appPath + '/app.html',
  directives: ROUTER_DIRECTIVES
})
@RouteConfig([
  {path: '/tasks/...', useAsDefault: true, component: TaskIndex, as: 'TaskIndex'}, // <--- Default Route

])
export class App {
}
