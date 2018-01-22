import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';

import { FusconeSharedModule } from '../../../shared';
import {TreeModule} from 'primeng/components/tree/tree';
import {TreeDragDropService} from 'primeng/components/common/api';
import {ButtonModule} from 'primeng/components/button/button';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {GrowlModule} from 'primeng/primeng';
import {TreeNodeService} from './service/treenode.service';

import {WizardModule} from 'primeng-extensions/components/wizard/wizard.js';
import {
    TreeDemoComponent,
    treeDemoRoute
} from './';

const primeng_STATES = [
    treeDemoRoute
];

@NgModule({
    imports: [
        FusconeSharedModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        TreeModule,
        ButtonModule,
        ContextMenuModule,
        GrowlModule,
        WizardModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        TreeDemoComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}, TreeDragDropService, TreeNodeService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FusconeTreeDemoModule {}
