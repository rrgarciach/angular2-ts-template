import {Inject, provide} from 'angular2/core';
import {Http, Headers, RequestOptionsArgs, ConnectionBackend, XHRBackend, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class APIService {
    private http:Http;
    private static URL:string = 'http://www.mocky.io/v2';

    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }

    public get(url:string, options?:RequestOptionsArgs):Observable<any> {
        let _url:string = APIService.URL + url;
        return this.http.get(_url, options);
    }
}

export const API_SERVICE_PROVIDER:any[] = [
    provide(APIService, {useClass: APIService, deps: [Http, XHRBackend, RequestOptions]})
];