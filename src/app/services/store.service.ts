import { set, get } from 'lodash';
import { Injectable } from '@angular/core';

interface StoreData<T> {
  role: string
  list: T[]
  selectOptions: Record<string, string[]>
}

@Injectable({
  providedIn: 'root'
})
export class StoreService<ListType extends Record<string, any>> {
  private data: StoreData<ListType> = {
    role: '',
    list: [],
    selectOptions: {}
  };

  get list(): ListType[] {
    return this.data.list;
  }

  get selectOptions(): Record<string, string[]> {
    return this.data.selectOptions;
  }

  get isNotManager(): boolean {
    return !this.isManager;
  }

  get isManager(): boolean {
    return this.data.role === 'manager';
  }

  setRole(role: string): void {
    this.data.role = role;
  }

  setList(data: ListType[]): void {
    this.data.list = data;
  }

  updateListItem(item: ListType, changedKey: string, compareKey: string = 'id'): void {
    this.data.list.forEach(el => {
      if (el[compareKey] !== item[compareKey]) return;
      set(el, changedKey, get(item, changedKey));
    });
  }

  addListItem(item: ListType): void {
    this.data.list.push(item);
  }

  setSelectOptions(data: any[], key: string): void {
    this.data.selectOptions[key] = data;
  }

  // refresh service
  onRestore() {
    this.data.list = [];
  }
}
