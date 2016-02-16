/// <reference path="../services/api.service.ts" />
/// <reference path="./task.model.ts" />

import {Injectable, provide} from 'angular2/core';
import {Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

import {APIService} from '../services/api.service';
import {TaskModel} from './task.model';

@Injectable()
export class TaskService {
  public tasks: Object[] = [];
  private apiService: APIService;

  constructor(apiService: APIService) {
    this.apiService = apiService;
  }

  public getTask(id: number): Observable<any> {
    let authHeader = new Headers();
    authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

    return Observable.create(observer => {
      this.apiService
        .get(
          '/tasks/' + id,
          {headers: authHeader}
        )
        .map(res => res.json())
        .subscribe(() => {
          observer.next(this.tasks[id - 1]);
          observer.complete();
        });
    });
  }

  public getTasks(): Observable<any> {
    if (this.tasks.length > 0) {
      return Observable.create(observer => {
        observer.next(this.tasks);
        observer.complete();
      });
    }

    let authHeader = new Headers();
    authHeader.append('Authorization', 'Bearer yourTokenGoesHere');

    return Observable.create(observer => {
      this.apiService
        .get(
          '/tasks',
          {headers: authHeader}
        )
        .map(res => res.json())
        .subscribe(tasks => {
          this.tasks = tasks;
          observer.next(this.tasks);
          observer.complete();
        });
    });
  }

  public createTask(task: TaskModel): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      headers.append('Authorization', 'Bearer yourTokenGoesHere');
      headers.append('Content-Type', 'application/json');

      this.apiService
        .post(
          '/tasks',
          TaskModel.serialize(task),
          {headers: new Headers({
            'Content-Type': 'application/json'
          })}
        )
        .map(res => res.json())
        .subscribe(() => {
          task.id = this.tasks.length + 1;
          this.tasks.push(task);
          observer.next(task);
          observer.complete();
        });
    });
  }

  public updateTask(task: TaskModel): Observable<any> {
    return Observable.create(observer => {
      let headers = new Headers();
      headers.append('Authorization', 'Bearer yourTokenGoesHere');
      headers.append('Content-Type', 'application/json');

      this.apiService
        .put(
          '/tasks/' + task.id,
          TaskModel.serialize(task),
          {
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          }
        )
        .map(res => res.json())
        .subscribe(() => {
          this.tasks[task.id - 1] = task;
          observer.next(task);
          observer.complete();
        });
    });
  }
}

/* istanbul ignore next */
export const TASK_SERVICE_PROVIDERS = [
  provide(TaskService, {
    useFactory: (apiService: APIService) => {
      return new TaskService(apiService);
    },
    deps: [APIService]
  })
];


