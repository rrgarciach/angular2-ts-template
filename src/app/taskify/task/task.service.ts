/// <reference path="../services/api.service.ts" />
/// <reference path="./task.model.ts" />

import {Inject, provide} from 'angular2/core';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {APIService} from '../services/api.service';
import {TaskModel} from './task.model'

export class TaskService {
    private apiService:APIService;
    private urlPaths:Object = {
        '/task/1': '/56954bda130000e909f9e2bc',
        '/task': '/56944a961100001b1183a72b',
    };
    public tasks:Object[] = [];

    constructor(@Inject(APIService) apiService:APIService) {
        this.apiService = apiService;
    }

    public getTask(id:number):Observable<any> {
        let authHeader = new Headers();
        authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

        return Observable.create(observer => {
            this.apiService.get(this.urlPaths['/task/1'] + '/' + id,
                {headers: authHeader})
                .map(res => res.json())
                .subscribe(task => {
                    observer.next(task);
                    observer.complete();
                });
        });
    }

    public getTasks():Observable<any> {
        if (this.tasks.length > 0) {
            return Observable.create(observer => {
                observer.next(this.tasks);
                observer.complete();
            });
        }

        let authHeader = new Headers();
        authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

        return Observable.create(observer => {
            this.apiService.get(this.urlPaths['/task'],
                {headers: authHeader})
                .map(res => res.json())
                .subscribe(tasks => {
                    this.tasks = tasks;
                    observer.next(this.tasks);
                    observer.complete();
                });
        });
    }

    public createTask(task:TaskModel):Observable<any> {
        let authHeader = new Headers();
        authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

        return Observable.create(observer => {
            this.apiService.post(this.urlPaths['/task'],
                task,
                {headers: authHeader})
                .map(res => res.json())
                .subscribe(() => {
                    task.id = this.tasks.length + 1;
                    this.tasks.push(task);
                    observer.next(task);
                    observer.complete();
                });
        });
    }
}

export const TASK_SERVICE_PROVIDER:any[] = [
    provide(TaskService, {useClass: TaskService, deps: [APIService]})
];