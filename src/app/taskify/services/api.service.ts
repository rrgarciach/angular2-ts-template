import {provide} from 'angular2/core';
import {Http, RequestOptionsArgs} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()
export class APIService {
  private static URL: string = 'http://localhost:3030';
  private http: Http;

  constructor(http: Http) {
    if (!http) {
      throw new Error('APIService: Invalid Http instance.');
    }
    this.http = http;
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<any> {
    let _url: string = APIService.URL + url;
    return this.http.get(_url, options);
  }

  public post(url: string, data: Object, options?: RequestOptionsArgs): Observable<any> {
    let _data: string = JSON.stringify(data);
    let _url: string = APIService.URL + url;
    return this.http.post(_url, _data, options);
  }

  public put(url: string, data: Object, options?: RequestOptionsArgs): Observable<any> {
    let _data: string = JSON.stringify(data);
    let _url: string = APIService.URL + url;
    return this.http.put(_url, _data, options);
  }
}

export const API_SERVICE_PROVIDER = [
  provide(APIService, {
    useFactory: (http: Http) => {
      return new APIService(http);
    },
    deps: [Http]
  })
];
