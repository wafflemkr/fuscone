import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { FusconeSharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {StepsModule} from 'primeng/components/steps/steps';
import {ButtonModule} from 'primeng/components/button/button';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    StepsDemoComponent,
    stepsDemoRoute
} from './';

const primeng_STATES = [
    stepsDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        CommonModule,
        BrowserAnimationsModule,
        StepsModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        StepsDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeStepsDemoModule {}
