
import {
    HttpClient, HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


const apiUrls = environment.apiUrl;

@Injectable({
    providedIn: 'root',
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.apiUrl}${path}`, { params })
      .pipe(
        catchError((error) => {
          return throwError(() => error);
        }),
      );
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post( `${environment.apiUrl}${path}`,
        JSON.stringify(body)
      ).pipe(
        catchError((error) => {
          return throwError(() => error);
        }),
      );
  }
}
