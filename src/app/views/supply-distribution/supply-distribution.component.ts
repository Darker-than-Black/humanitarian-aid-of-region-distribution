import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageMixin } from '../../mixins/PageMixin';
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { ItemForm } from '../../types/form';
import { SupplyDistribution } from '../../types/api';
import { SUPPLY_DISTRIBUTION_ROUTES } from '../../configs/apiRoutes';
import { SUPPLY_DISTRIBUTION_TABLE_CONFIG } from '../../configs/tableConfigs';

@Component({
  selector: 'app-supply-distribution',
  templateUrl: './supply-distribution.component.html',
  styleUrls: ['./supply-distribution.component.scss']
})
export class SupplyDistributionComponent extends PageMixin<SupplyDistribution, ItemForm> implements OnInit {
  constructor(
    public override store: StoreService<SupplyDistribution>,
    apiService: ApiService<SupplyDistribution, any>,
    private route: ActivatedRoute
  ) {
    super(store, apiService);
    apiService.onInit(SUPPLY_DISTRIBUTION_ROUTES);
  }

  tableConfig = SUPPLY_DISTRIBUTION_TABLE_CONFIG;

  ngOnInit(): void {
    this.loading = true;
    const id =  this.route.snapshot.paramMap.get('id') || '';

    this.apiService.getData({id}).subscribe(data => {
      this.store.setList(data);
      this.loading = false;
    });
  }
}
