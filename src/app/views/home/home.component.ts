import { Component, OnInit } from '@angular/core';
import { MedTableColumnConfig } from 'med-table';

import { Item } from '../../types/api';
import { PageMixin } from '../../mixins/PageMixin';
import { HOME_ROUTES } from '../../configs/apiRoutes';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { DOZ_RECIPIENT_COL, DOZ_SUPPLY_TABLE_CONFIG } from '../../configs/tableConfigs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends PageMixin<Item> implements OnInit {
  constructor(public override store: StoreService<Item>, apiService: ApiService) {
    super(store, apiService);
    apiService.onInit(HOME_ROUTES);
  }

  checkedFinalStatus: boolean = true;
  dialogChangeStatus?: Item;

  get data(): Item[] {
    if (this.checkedFinalStatus) {
      return this.store.list.filter(({status}) => status && status.is_final);
    }

    return this.store.list;
  }

  get tableConfig(): MedTableColumnConfig[] {
    if (this.store.isNotManager) {
      return DOZ_SUPPLY_TABLE_CONFIG;
    }

    return  DOZ_SUPPLY_TABLE_CONFIG.concat(DOZ_RECIPIENT_COL);
  }

  ngOnInit() {
    this.loading = true;

    this.apiService.getData<Item[]>().subscribe(data => {
      this.store.setList(data);
      this.loading = false;
    });
  }

  getQuery({ status: { is_final } }: Item): Record<string, any> {
    return {
      is_final: Number(is_final),
    };
  }
}

