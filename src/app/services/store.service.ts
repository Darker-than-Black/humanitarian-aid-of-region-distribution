import { Injectable } from '@angular/core';

interface StoreData<T> {
  list: T[]
  selectOptions: Record<string, string[]>
}

@Injectable({
  providedIn: 'root'
})
export class StoreService<ListType extends Record<string, any>> {
  private data: StoreData<ListType> = {
    list: [],
    selectOptions: {}
  };

  get list(): ListType[] {
    return this.data.list;
  }

  get selectOptions(): Record<string, string[]> {
    return this.data.selectOptions;
  }

  setList(data: ListType[]): void {
    this.data.list = data;
  }

  updateListItem(item: ListType, compareKey: string = 'id'): void {
    this.data.list = this.data.list
      .map(el => el[compareKey] === item[compareKey] ? item : el);
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
    this.data.selectOptions = {};
  }
}
