/// <reference path="./app.ts" />
/// <reference path="./taskify/services/api.service.ts" />
/// <reference path="./taskify/task/task.service.ts" />

import {bind, provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APP_BASE_HREF, ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import 'rxjs/Rx';

import {App} from './app';
import {TASK_SERVICE_PROVIDERS} from './taskify/task/task.service';
import {API_SERVICE_PROVIDER} from './taskify/services/api.service';

// noinspection TypeScriptValidateTypes
bootstrap(App, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  API_SERVICE_PROVIDER,
  TASK_SERVICE_PROVIDERS,
  bind(APP_BASE_HREF).toValue(location.pathname),
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
