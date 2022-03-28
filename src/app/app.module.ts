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
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {InputComponent} from './components/forms/input/input.component';
import {TextareaComponent} from './components/forms/textarea/textarea.component';
import {SelectComponent} from './components/forms/select/select.component';
import {InputMaskComponent} from './components/forms/input-mask/input-mask.component';
import {DynamicInputComponent} from './components/forms/dynamic-input/dynamic-input.component';
import {DynamicSelectComponent} from './components/forms/dynamic-select/dynamic-select.component';
import {DynamicInputMaskComponent} from './components/forms/dynamic-input-mask/dynamic-input-mask.component';
import {DynamicTextareaComponent} from './components/forms/dynamic-textarea/dynamic-textarea.component';
import {WrapperDynamicInputComponent} from './components/forms/wrapper-dynamic-input/wrapper-dynamic-input.component';
import {ChangeStatusFormComponent} from './components/change-status-form/change-status-form.component';
import {PageNotFoundComponent} from './views/page-not-found/page-not-found.component';
import {SupplyDistributionComponent} from './views/supply-distribution/supply-distribution.component';
import {ElementHostDirective} from './directives/element-host.directive';
import {ZozDistributionComponent} from './views/zoz-distribution/zoz-distribution.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    TextareaComponent,
    InputMaskComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicInputMaskComponent,
    DynamicTextareaComponent,
    WrapperDynamicInputComponent,
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
    RadioButtonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      types: [
        { name: FIELD_TYPES.TEXT, component: DynamicInputComponent },
        { name: FIELD_TYPES.NUMBER, component: DynamicInputComponent },
        { name: FIELD_TYPES.MASK, component: DynamicInputMaskComponent },
        { name: FIELD_TYPES.SELECT, component: DynamicSelectComponent },
        { name: FIELD_TYPES.TEXTAREA, component: DynamicTextareaComponent },
      ],
      wrappers: [
        { name: 'input-wrapper', component: WrapperDynamicInputComponent },
      ],
    }),
    RouterModule.forRoot(ROUTES,{ useHash: true }),
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
