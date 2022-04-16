import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MedTableModule, FIELD_TYPES} from 'med-table';
import {FormlyModule} from '@ngx-formly/core';

import {ROUTES} from './routes';

import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {ChangeStatusFormComponent} from './components/change-status-form/change-status-form.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {SupplyDistributionComponent} from './views/supply-distribution/supply-distribution.component';
import {ElementHostDirective} from './directives/element-host.directive';
import {ZozDistributionComponent} from './views/zoz-distribution/zoz-distribution.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeStatusFormComponent,
    HomeComponent,
    PageNotFoundComponent,
    SupplyDistributionComponent,
    ElementHostDirective,
    ZozDistributionComponent,
  ],
  imports: [
    ToastModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    MedTableModule,
    InputTextModule,
    InputMaskModule,
    HttpClientModule,
    InputSwitchModule,
    RadioButtonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES,{ useHash: true }),
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
