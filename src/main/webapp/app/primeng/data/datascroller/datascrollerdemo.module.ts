import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { FusconeSharedModule } from '../../../shared';
import {DataScrollerModule} from 'primeng/components/datascroller/datascroller';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {ButtonModule} from 'primeng/components/button/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GrowlModule} from 'primeng/components/growl/growl';
import {BrowserService} from './service/browser.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {
    DataScrollerDemoComponent,
    datascrollerDemoRoute
} from './';

const primeng_STATES = [
    datascrollerDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        FormsModule,
        DataScrollerModule,
        HttpModule,
        BrowserAnimationsModule,
        DialogModule,
        ButtonModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        DataScrollerDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, BrowserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeDataScrollerDemoModule {}
