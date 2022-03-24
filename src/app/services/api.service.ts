import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

import { UrlBuilder } from './url-builder';
import { ServerResponse } from '../types/api';
import { StoreService } from './store.service';
import { NotificationService } from './notification.service';
import { NOTIFICATION_TYPES } from '../constants/notificationTypes';
import { notificationMessages } from '../constants/notificationMessages';

@Injectable({
  providedIn: 'root'
})
export class ApiService<ItemType, ItemFormType> {
  constructor(
    private http: HttpClient,
    private store: StoreService<ItemType>,
    private notification: NotificationService,
  ) {}

  private routes: Record<string, string> = {};
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getData(params?: Record<string, string>): Observable<ItemType[]> {
    return this.http.get<ServerResponse<ItemType[]>>(this.routes['GET_DATA'],{ params }).pipe(
      map(data => this.responseHandler<ItemType[]>(data, [])),
      catchError(this.handleError<ItemType[]>(notificationMessages.serverError, 'getData', [])),
    );
  }

  updateItem(item: ItemType): Observable<void> {
    return this.http.post<ServerResponse<ItemType>>(this.routes['UPDATE_ROW'], item, this.httpOptions).pipe(
      map(({ data}) => this.store.updateListItem(data)),
      tap(() => this.notification.add(notificationMessages.updateSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<void>(notificationMessages.serverError, 'updateItem')),
    );
  }

  addItem(item: ItemFormType): Observable<void> {
    return this.http.post<ServerResponse<ItemType>>(this.routes['ADD_ROW'], item, this.httpOptions).pipe(
      map(({ data }) => this.store.addListItem(data)),
      tap(() => this.notification.add(notificationMessages.fieldSuccess, NOTIFICATION_TYPES.SUCCESS)),
      catchError(this.handleError<void>(notificationMessages.serverError, 'addItem')),
    );
  }

  getSelectData(url: string): Observable<Record<string, any>[]> {
    return this.http.get<ServerResponse<any[]>>(new UrlBuilder(url).url).pipe(
      map(({ data }) => data),
      catchError(this.handleError<Record<string, any>[]>(notificationMessages.serverError, 'getSelectData', [])),
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
