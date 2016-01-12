/// <reference path="../app/app.ts" />
/// <reference path="./taskify/services/api.service.ts" />

import {bind} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';
import 'rxjs/Rx';

import {App} from '../app/app';
import {API_SERVICE_PROVIDER} from './taskify/services/api.service';
import {TASK_SERVICE_PROVIDER} from './taskify/task/task.service';

bootstrap(App,  [
    ROUTER_BINDINGS,
    HTTP_PROVIDERS,
    API_SERVICE_PROVIDER,
    TASK_SERVICE_PROVIDER,
    bind(APP_BASE_HREF).toValue(location.pathname)
]);
