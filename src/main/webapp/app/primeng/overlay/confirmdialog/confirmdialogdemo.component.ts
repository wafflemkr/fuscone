import { Component, OnInit } from '@angular/core';
import { JhiLanguageService } from 'ng-jhipster';
import {MenuItem, Message} from 'primeng/components/common/api';
import {ConfirmationService} from 'primeng/components/common/api';

@Component({
    selector: 'jhi-confirmdialog',
    templateUrl: './confirmdialogdemo.component.html',
    styles: []
})
export class ConfirmDialogDemoComponent implements OnInit {
    msgs: Message[] = [];
    activeIndex = 0;

    ngOnInit() {}

    constructor(private confirmationService: ConfirmationService) {}

    confirmAccept() {
        this.confirmationService.confirm({
            message: 'Do you want to subscribe for Angular news feeds?',
            header: 'Subscribe',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.msgs = [];
                this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
            }
        });
    }

    confirmDelete() {
        this.confirmationService.confirm({
            message: 'Do you want to delete AngularNews account?',
            header: 'UnSubscribe',
            icon: 'fa fa-trash',
            accept: () => {
                this.msgs = [];
                this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'The record is deleted'});
            }
        });
    }

    confirmCustomAccept() {
        this.confirmationService.confirm({
            message: 'Do you like to use DataTable component?',
            accept: () => {
                this.msgs = [];
                this.msgs.push({severity: 'info', summary: 'Confirmed', detail: 'You have accepted'});
            }
        });
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
