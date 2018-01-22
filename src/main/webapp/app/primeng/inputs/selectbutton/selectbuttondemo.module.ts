import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FusconeSharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {
    SelectButtonDemoComponent,
    selectbuttonDemoRoute
} from './';

const primeng_STATES = [
    selectbuttonDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        FormsModule,
        SelectButtonModule,
        GrowlModule,
        SelectButtonModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        SelectButtonDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeSelectButtonDemoModule {}
