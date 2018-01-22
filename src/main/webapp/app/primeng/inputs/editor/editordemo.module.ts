import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FusconeSharedModule } from '../../../shared';
import {FormsModule} from '@angular/forms';
import {EditorModule} from 'primeng/components/editor/editor';
import {ButtonModule} from 'primeng/components/button/button';
import {GrowlModule} from 'primeng/components/growl/growl';
import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {SharedModule} from 'primeng/components/common/shared';

import {
    EditorDemoComponent,
    editorDemoRoute
} from './';

const primeng_STATES = [
    editorDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        FormsModule,
        EditorModule,
        GrowlModule,
        ButtonModule,
        WizardModule,
        SharedModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        EditorDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeEditorDemoModule {}
