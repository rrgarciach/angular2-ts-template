/// <reference path="./config/paths.ts" />
/// <reference path="./taskify/routes" />

import {Component, View, Inject} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {PATHS} from './config/paths';
import {ROUTES} from './taskify/routes';

@Component({
    selector: 'app'
})
@View({
    templateUrl: PATHS.appPath + '/app.html',
    directives: ROUTER_DIRECTIVES
})
@RouteConfig(ROUTES)
export class App {
}
