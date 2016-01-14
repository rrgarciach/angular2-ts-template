/// <reference path="./api.service.ts" />

import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Observable} from 'rxjs/Rx';

import {APIService} from './api.service';

describe('Api service', () => {

    let apiService:APIService;

    beforeEach(() => {
        let injector:Injector = Injector.resolveAndCreate([
            MockBackend,
            BaseRequestOptions,
            provide(Http, {
                useFactory: function (mockBackend, baseRequestOptions) {
                    return new Http(mockBackend, baseRequestOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            })
        ]);

        let http:Http = injector.get(Http);
        apiService = new APIService(http);
    });

    it('should return an observable from get method', () => {
        let url:string = '/';
        expect(apiService.get(url) instanceof Observable).toBeTruthy();
    });
});
