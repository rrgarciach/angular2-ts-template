import {Inject, provide} from 'angular2/core';
import {Http, Headers, RequestOptionsArgs, ConnectionBackend, XHRBackend, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class APIService {
    private http:Http;
    private static URL:string = 'http://www.mocky.io/v2';

    constructor(@Inject(Http) http:Http) {
        if (!http) {
            throw new Error('APIService: Invalid Http instance.');
        }
        this.http = http;
    }

    public get(url:string, options?:RequestOptionsArgs):Observable<any> {
        let _url:string = APIService.URL + url;
        return this.http.get(_url, options);
    }

    public post(url:string, data:Object, options?:RequestOptionsArgs):Observable<any> {
        let _data:string = JSON.stringify(data);
        let _url:string = APIService.URL + url;
        return this.http.post(_url, _data, options);
    }

    public put(url:string, data:Object, options?:RequestOptionsArgs):Observable<any> {
        let _data:string = JSON.stringify(data);
        let _url:string = APIService.URL + url;
        return this.http.put(_url, _data, options);
    }
}

export const API_SERVICE_PROVIDER:any[] = [
    provide(APIService, {useClass: APIService, deps: [Http, XHRBackend, RequestOptions]})
];