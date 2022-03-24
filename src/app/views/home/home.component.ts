import { Component, OnInit } from '@angular/core';

import { PageMixin } from '../../mixins/PageMixin';
import { HOME_ROUTES } from '../../configs/apiRoutes';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { Item } from '../../types/api';
import { ItemForm } from '../../types/form';
import { TableColumnConfig } from '../../types/table';
import { DOZ_SUPPLY_TABLE_CONFIG } from '../../configs/tableConfigs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageMixin<Item, ItemForm> implements OnInit {
  constructor(public override store: StoreService<Item>, apiService: ApiService<Item, ItemForm>) {
    super(store, apiService);
    apiService.onInit(HOME_ROUTES);
  }

  dialogChangeStatus?: Item;
  tableConfig: TableColumnConfig[] = DOZ_SUPPLY_TABLE_CONFIG;

  ngOnInit() {
    this.loading = true;

    this.apiService.getData().subscribe(data => {
      this.store.setList(data);
      this.loading = false;
    });
  }

  onUpdateColumn(data: Item): void {
    console.log('onUpdateColumn', data);
    // this.apiService.updateItem({...this.item, ...this.model})
    //   .subscribe(() => {});
  }
}

