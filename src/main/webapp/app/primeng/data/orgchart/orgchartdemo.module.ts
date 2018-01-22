import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { FusconeSharedModule } from '../../../shared';
import {OrganizationChartModule} from 'primeng/components/organizationchart/organizationchart';
import {GrowlModule} from 'primeng/components/growl/growl';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {VCardService} from './service/vcard.service';

import {
    OrgChartDemoComponent,
    orgchartDemoRoute
} from './';

const primeng_STATES = [
    orgchartDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        OrganizationChartModule,
        WizardModule,
        GrowlModule,
        DialogModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, VCardService],
    declarations: [
        OrgChartDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeOrgChartDemoModule {}
