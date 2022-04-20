import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MedTableColumnConfig, MedTableSettings } from 'med-table';

import { PageMixin } from '../../mixins/PageMixin';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { SupplyDistribution } from '../../types/api';
import { SUPPLY_DISTRIBUTION_ROUTES } from '../../configs/apiRoutes';
import {
  FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG,
  NON_FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG,
} from '../../configs/tableConfigs';

@Component({
  selector: 'app-supply-distribution',
  templateUrl: './supply-distribution.component.html',
  styleUrls: ['./supply-distribution.component.scss']
})
export class SupplyDistributionComponent extends PageMixin<SupplyDistribution> implements OnInit {
  constructor(
    public override store: StoreService<SupplyDistribution>,
    apiService: ApiService,
    private route: ActivatedRoute
  ) {
    super(store, apiService);
    apiService.onInit(SUPPLY_DISTRIBUTION_ROUTES);

    this.pageId =  this.route.snapshot.paramMap.get('id') || '';
    const is_final = this.route.snapshot.queryParamMap.get('is_final');
    this.queryParams = { is_final };

    this.tableConfig = Number(is_final) ? FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG
      : NON_FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG;
  }

  readonly tableConfig: MedTableColumnConfig[];
  readonly queryParams = {};
  pageId: string = '';

  get tableSettings(): MedTableSettings {
    return {
      exportFileName: `MedData Партія ${this.pageId}`,
    };
  }

  ngOnInit(): void {
    this.loading = true;

    this.apiService.getData<SupplyDistribution[]>({id: this.pageId}).subscribe(data => {
      this.store.setList(data);
      this.loading = false;
    });
  }
}
