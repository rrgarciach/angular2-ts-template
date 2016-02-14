
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TaskIndex} from './index/index';
import {TaskShow} from './show/show';
import {TaskUpdate} from './update/update';
import {TaskCreate} from './create/create';

@Component({
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', component: TaskIndex, as: 'TaskIndex', useAsDefault: true}, // <--- Default Route
  {path: '/:id', component: TaskShow, as: 'TaskShow'},
  {path: '/update/:id', component: TaskUpdate, as: 'TaskUpdate'},
  {path: '/create', component: TaskCreate, as: 'TaskCreate'},
])
export class TaskRoot {
}
