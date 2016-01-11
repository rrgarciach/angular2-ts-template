import {Inject, provide} from 'angular2/core';
import {Http, Headers, RequestOptionsArgs} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

export class APIService extends Http {
    private http:Http;
    private static URL:string = 'http://www.mocky.io/v2';

    public get(url:string, options?:RequestOptionsArgs):Observable<any> {
        let _url:string = APIService.URL + url;
        return super.get(_url, options);
    }
}

export const API_SERVICE_PROVIDER:any[] = [
    provide(APIService, {useClass: APIService, deps: [Http]})
];