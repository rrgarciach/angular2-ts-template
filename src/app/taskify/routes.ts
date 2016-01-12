/// <reference path="./task/index/index.ts" />
/// <reference path="./task/show/show.ts" />
/// <reference path="./task/create/create.ts" />
/// <reference path="./task/update/update.ts" />

import {TaskIndex} from './task/index/index';
import {TaskShow} from './task/show/show';
import {TaskCreate} from './task/create/create';
import {TaskUpdate} from './task/update/update';

export const ROUTES = [
  {path: '/', component: TaskIndex, as: 'TaskIndex'}, // Default route
  {path: '/tasks', component: TaskIndex, as: 'TaskIndex'},
  {path: '/tasks/:id', component: TaskShow, as: 'TaskShow'},
  {path: '/tasks/update/:id', component: TaskUpdate, as: 'TaskUpdate'},
  {path: '/tasks/create', component: TaskCreate, as: 'TaskCreate'},
];
