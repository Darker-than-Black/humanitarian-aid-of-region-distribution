import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageMixin } from '../../mixins/PageMixin';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { SupplyDistribution } from '../../types/api';
import { SUPPLY_DISTRIBUTION_ROUTES } from '../../configs/apiRoutes';
import {
  FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG,
  NON_FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG,
} from '../../configs/tableConfigs';
import {TableColumnConfig} from "../../types/table";

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
    const query = this.route.snapshot.queryParamMap.get('is_final');
    const isFinal = Number(query);

    this.tableConfig = isFinal ? FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG
      : NON_FINAL_SUPPLY_DISTRIBUTION_TABLE_CONFIG;
  }

  tableConfig: TableColumnConfig[];
  pageId: string = '';

  ngOnInit(): void {
    this.loading = true;

    this.apiService.getData<SupplyDistribution[]>({id: this.pageId}).subscribe(data => {
      this.store.setList(data);
      this.loading = false;
    });
  }
}
