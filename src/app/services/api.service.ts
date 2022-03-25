import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { UrlBuilder } from './url-builder';
import { ServerResponse } from '../types/api';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../constants/notificationTypes';
import { notificationMessages } from '../constants/notificationMessages';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private notification: NotificationService) {}

  private routes: Record<string, string> = {};
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getData<T>(params?: Record<string, string>, defaultValue: any = []): Observable<T> {
    return this.http.get<ServerResponse<T>>(this.routes['GET_DATA'],{ params }).pipe(
      map(data => this.responseHandler<T>(data, defaultValue)),
      catchError(this.handleError<T>(notificationMessages.serverError, 'getData', defaultValue)),
    );
  }

  updateItem<T>(item: T, defaultValue?: any): Observable<T> {
    return this.http.post<ServerResponse<T>>(this.routes['UPDATE_ROW'], item, this.httpOptions).pipe(
      map(({ data}) => data),
      tap(() => this.notification.add(notificationMessages.updateSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<T>(notificationMessages.serverError, 'updateItem', defaultValue)),
    );
  }

  addItem<T, R>(item: T, defaultValue?: any): Observable<R> {
    return this.http.post<ServerResponse<R>>(this.routes['ADD_ROW'], item, this.httpOptions).pipe(
      map(({ data }) => data),
      tap(() => this.notification.add(notificationMessages.fieldSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<R>(notificationMessages.serverError, 'addItem', defaultValue)),
    );
  }

  getSelectData<T>(url: string): Observable<T> {
    return this.http.get<ServerResponse<T>>(new UrlBuilder(url).url).pipe(
      map(({ data }) => data),
      catchError(this.handleError<T>(notificationMessages.serverError, 'getSelectData', [])),
    );
  }

  onInit(routes: Record<string, string>): void {
    Object.entries(routes).forEach(([key, url]) => {
      this.routes[key] = new UrlBuilder(url).url;
    });
  }

  // refresh service
  onRestore() {
    this.routes = {};
  }

  private responseHandler<T>({data, error}: ServerResponse<T>, defaultValue: any): T {
    if (error) {
      this.log(`Failed: ${error}`, 'error');
      this.notification.add(error, NOTIFICATION_TYPES.ERROR);
    }

    return data || defaultValue;
  }

  private handleError<T>(message: string, operation = 'operation', result?: any) {
    return (error: any): Observable<T> => {
      this.notification.add(message, NOTIFICATION_TYPES.ERROR);
      this.log(`${operation} failed: ${error.message}`, 'error');

      return of(result as T);
    };
  }

  private log(message: string, type = 'log'): void {
    (console as Record<string, any>)[type](`ApiService: ${message}`);
  }
}
