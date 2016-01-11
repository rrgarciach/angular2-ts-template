/// <reference path="./task/index/index.ts" />
/// <reference path="./task/show/show.ts" />

import {TaskIndex} from './task/index/index';
import {TaskShow} from './task/show/show';

export const ROUTES = [
  {path: '/', component: TaskIndex, as: 'TaskIndex'},
  {path: '/:id', component: TaskShow, as: 'TaskShow'},
];
