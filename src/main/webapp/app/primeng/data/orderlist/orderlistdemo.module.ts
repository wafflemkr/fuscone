import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { FusconeSharedModule } from '../../../shared';
import {OrderListModule} from 'primeng/components/orderlist/orderlist';
import {GrowlModule} from 'primeng/components/growl/growl';

import {CountryService} from './service/country.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    OrderlistDemoComponent,
    orderlistDemoRoute
} from './';

const primeng_STATES = [
    orderlistDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        OrderListModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, CountryService],
    declarations: [
        OrderlistDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeOrderListDemoModule {}
