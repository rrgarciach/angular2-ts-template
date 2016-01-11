/// <reference path="../services/api_service.ts" />

import {Inject, provide} from 'angular2/core';
import {API_SERVICE_PROVIDER} from '../services/api_service';

export class TaskService {
    //private APIService:APIService;

    //constructor(@Inject(Http) http:Http) {
    //    this.http = http;
    //}
    //
    //public getTask(id:number):Observable<Task> {
    //}
    //
    //public getTasks():Observable<Task[]> {
    //
    //    return Observable.create(observer => {
    //        APIService.get('/tasks/56942ba7110000690b83a716',
    //            {headers: authHeader})
    //            .map(res => res.text())
    //            .subscribe(response => {
    //                let tasks = JSON.parse(response);
    //                observer.next(tasks);
    //                observer.complete();
    //            });
    //    });
    //}
}

export const TASK_SERVICE_PROVIDER:any[] = [
    //provide(TaskService, {useClass: TaskService, deps: [Http]})
];