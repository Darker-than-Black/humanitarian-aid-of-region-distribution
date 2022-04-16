import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedTableSettings, MedUpdateColumnEvent } from 'med-table';

import { PageMixin } from '../../mixins/PageMixin';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { ZOZ_DISTRIBUTION_ROUTES } from '../../configs/apiRoutes';
import { ZozDistribution, ZozDivision, ZozSupply } from '../../types/api';
import { ZOZ_DISTRIBUTION_TABLE_CONFIG } from '../../configs/tableConfigs';

@Component({
  selector: 'app-zoz-distribution',
  templateUrl: './zoz-distribution.component.html',
  styleUrls: ['./zoz-distribution.component.scss']
})
export class ZozDistributionComponent extends PageMixin<ZozDivision> implements OnInit {
  constructor(
    public override store: StoreService<ZozDivision>,
    apiService: ApiService,
    private route: ActivatedRoute
  ) {
    super(store, apiService);
    apiService.onInit(ZOZ_DISTRIBUTION_ROUTES);

    const is_final = this.route.snapshot.queryParamMap.get('is_final');
    this.queryParams = { is_final };
  }

  readonly tableConfig = ZOZ_DISTRIBUTION_TABLE_CONFIG;
  readonly queryParams = {};
  parentId: string = '';
  itemId: string = '';
  tableSettings: MedTableSettings = {
    export: true,
    exportFileName: 'Розподіли на ЗОЗ',
  };
  supply: ZozSupply = {
    quantity: '',
    delivery_balance: '',
  };

  ngOnInit(): void {
    this.loading = true;
    this.parentId =  this.route.snapshot.paramMap.get('id') || '';
    this.itemId =  this.route.snapshot.paramMap.get('itemId') || '';

    this.apiService.getData<ZozDistribution>({item_id: this.itemId}, {})
      .subscribe(({divisions, supply}) => {
        this.store.setList(divisions.map(el => ({...el, editable: this.store.isNotManager})));
        this.supply = supply;
        this.loading = false;
      });
  }

  onUpdateColumn({item, key}: MedUpdateColumnEvent<ZozDivision>): void {
    this.loading = true;

    this.apiService.updateItem<ZozDivision>(item).subscribe(data => {
      this.store.updateListItem(data, key,'division_id');
      this.loading = false;
    });
  }
}
