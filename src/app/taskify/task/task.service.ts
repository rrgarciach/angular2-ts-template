/// <reference path="../services/api.service.ts" />

import {Inject, provide} from 'angular2/core';
import {Headers} from 'angular2/http';
import {APIService} from '../services/api.service';
import {Observable} from 'rxjs/Rx';

export class TaskService {
    private apiService:APIService;
    private urlPaths:Object = {
        '/task/1': '/56944942110000d61083a729',
        '/task': '/56944a961100001b1183a72b',
    };

    constructor(@Inject(APIService) apiService:APIService) {
        this.apiService = apiService;
    }

    public getTask(id:number):Observable<any> {
        let authHeader = new Headers();
        authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

        return Observable.create(observer => {
            this.apiService.get(this.urlPaths['/task/1'] + id,
                {headers: authHeader})
                .map(res => res.json())
                .subscribe(task => {
                    observer.next(task);
                    observer.complete();
                });
        });
    }

    public getTasks():Observable<any> {
        let authHeader = new Headers();
        authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

        return Observable.create(observer => {
            this.apiService.get(this.urlPaths['/task'],
                {headers: authHeader})
                .map(res => res.json())
                .subscribe(tasks => {
                    observer.next(tasks);
                    observer.complete();
                });
        });
    }
}

export const TASK_SERVICE_PROVIDER:any[] = [
    provide(TaskService, {useClass: TaskService, deps: [APIService]})
];