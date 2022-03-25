import { Component, OnInit, ViewChild } from '@angular/core';

import { PageMixin } from '../../mixins/PageMixin';
import { HOME_ROUTES } from '../../configs/apiRoutes';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { Item } from '../../types/api';
import { TableColumnConfig } from '../../types/table';
import { DOZ_SUPPLY_TABLE_CONFIG } from '../../configs/tableConfigs';
// import { ElementHostDirective } from '../../directives/element-host.directive';

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
  tableConfig: TableColumnConfig[] = DOZ_SUPPLY_TABLE_CONFIG;

  // @ViewChild(ElementHostDirective, {static: true}) fromDirective!: ElementHostDirective;

  ngOnInit() {
    this.loading = true;

    this.apiService.getData<Item[]>().subscribe(data => {
      this.store.setList(data);
      this.loading = false;
    });
  }
}

