/// <reference path="./index.ts" />
/// <reference path="../task.service.ts" />
/// <reference path="../../services/api.service.ts" />

import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';

import {TaskIndex} from './index';
import {TaskService} from '../task.service';
import {APIService} from '../../services/api.service';

describe('Task index component', () => {

    let taskIndex:TaskIndex;
    let taskService:TaskService;

    beforeEach(() => {
        let injector:Injector = Injector.resolveAndCreate([
            provide(APIService, {
                useFactory: function () {
                    return new APIService(null);
                }
            }),
            provide(TaskService, {
                useFactory: function (apiService:APIService) {
                    return new TaskService(apiService);
                },
                deps: [APIService]
            })
        ]);

        taskService = injector.get(TaskService);
        //taskIndex = new TaskIndex(taskService);
    });

    it('should have a TaskService instance', () => {
        expect(taskService instanceof TaskService).toBeTruthy();
    });

    xit('should get tasks list', () => {
        spyOn(taskService, 'getTasks');
        expect(taskService.getTasks).toHaveBeenCalled();
    });

    xit('should display tasks list', () => {
    });
});
