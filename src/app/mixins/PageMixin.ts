import { Component, OnDestroy } from '@angular/core';

import { StoreService } from '../services/store.service';
import { ApiService } from '../services/api.service';

@Component({
  template: '',
})
export class PageMixin<R> implements OnDestroy {
  constructor(protected store: StoreService<R>, protected apiService: ApiService) {}

  loading: boolean = false;

  ngOnDestroy() {
    this.apiService.onRestore();
    this.store.onRestore();
  }
}
