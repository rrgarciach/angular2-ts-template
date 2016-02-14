/// <reference path="./api.service.ts" />

import {Injector, provide} from 'angular2/core';
import {BaseRequestOptions, Http} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {Observable} from 'rxjs/Rx';

import {APIService} from './api.service';

describe('Api service', () => {

    let apiService: APIService;
    let http: Http;

    beforeEach(() => {
        let injector: Injector = Injector.resolveAndCreate([
            MockBackend,
            BaseRequestOptions,
            provide(Http, {
                useFactory: function (mockBackend, baseRequestOptions) {
                    return new Http(mockBackend, baseRequestOptions);
                },
                deps: [MockBackend, BaseRequestOptions]
            })
        ]);

        http = injector.get(Http);
        apiService = new APIService(http);
    });

    it('should validate http service injected on error', () => {
        expect(() => new APIService(null)).toThrowError('APIService: Invalid Http instance.');
    });

    it('should return an observable and modify api url on get method on success', () => {
        let url = '/';
        let expectedUrl = 'http://www.mocky.io/v2' + url;
        let expectedOptions: any = undefined;

        spyOn(http, 'get').and.returnValue(new Observable());

        expect(apiService.get(url) instanceof Observable).toBeTruthy();
        expect(http.get).toHaveBeenCalledWith(expectedUrl, expectedOptions);
    });
});
