import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { FusconeSharedModule } from '../../../shared';
import {TreeTableModule} from 'primeng/components/treetable/treetable';
import {ButtonModule} from 'primeng/components/button/button';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {GrowlModule} from 'primeng/components/growl/growl';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';

import {TreeNodeService} from './service/treenode.service';

import {
    TreeTableDemoComponent,
    treetableDemoRoute
} from './';

const primeng_STATES = [
    treetableDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        TreeTableModule,
        ButtonModule,
        ContextMenuModule,
        WizardModule,
        GrowlModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TreeTableDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, TreeNodeService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeTreeTableDemoModule {}
