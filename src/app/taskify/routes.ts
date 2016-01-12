/// <reference path="./task/index/index.ts" />
/// <reference path="./task/show/show.ts" />
/// <reference path="./task/create/create.ts" />

import {TaskIndex} from './task/index/index';
import {TaskShow} from './task/show/show';
import {TaskCreate} from './task/create/create';

export const ROUTES = [
  {path: '/', component: TaskIndex, as: 'TaskIndex'},
  {path: '/:id', component: TaskShow, as: 'TaskShow'},
  {path: '/create', component: TaskCreate, as: 'TaskCreate'},
];
