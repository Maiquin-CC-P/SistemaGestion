import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { InjectorInstance } from 'src/app/app.module';

export class RequestMethod {
  private http: HttpClient;

  constructor() {
    this.http = InjectorInstance.get<HttpClient>(HttpClient);
  }

  get<T>(url: string, params: string, headers: Headers): Observable<T> {
    return this.http.get<T>(url + ((params) ? params : ''), {headers: new HttpHeaders(headers)});
  }

  post<T>(url: string, body: string | FormData, headers: Headers): Observable<T> {
    return this.http.post<T>(url, body, {headers: new HttpHeaders(headers)});
  }

  delete<T>(url: string, params: string, headers: Headers): Observable<T> {
    return this.http.delete<T>(url + ((params) ? params : ''), {headers: new HttpHeaders(headers)});
  }

  put<T>(url: string, body: string, headers: Headers): Observable<T> {
    return this.http.put<T>(url, body, {headers: new HttpHeaders(headers)});
  }

  getNewTab(url: string, params: string) {
    window.open(url + params, '_blank');
  }

  postFile<ArrayBuffer>(url: string, body: string | FormData, headers: Headers): Observable<ArrayBuffer> {
    return this.http.post<ArrayBuffer>(url, body, {headers: new HttpHeaders(headers), responseType: 'blob' as 'json' });
  }
}
