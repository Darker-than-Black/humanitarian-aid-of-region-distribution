import { Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ZozDistributionComponent } from './views/zoz-distribution/zoz-distribution.component';
import { SupplyDistributionComponent } from './views/supply-distribution/supply-distribution.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'supply/:id',
    component: SupplyDistributionComponent,
  },
  {
    path: 'supply/:id/zoz/:itemId',
    component: ZozDistributionComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
