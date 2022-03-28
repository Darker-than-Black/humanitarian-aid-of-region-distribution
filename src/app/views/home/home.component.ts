import { Component, OnInit } from '@angular/core';
import { MedTableColumnConfig } from 'med-table';

import { PageMixin } from '../../mixins/PageMixin';
import { HOME_ROUTES } from '../../configs/apiRoutes';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { Item } from '../../types/api';
import { DOZ_SUPPLY_TABLE_CONFIG } from '../../configs/tableConfigs';

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

  dialogChangeStatus?: Item;
  tableConfig: MedTableColumnConfig[] = DOZ_SUPPLY_TABLE_CONFIG;

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

