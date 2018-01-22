import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'jhi-select',
    templateUrl: './selectdemo.component.html',
    styles: []
})
export class SelectDemoComponent implements OnInit {
    msgs: Message[] = [];

    countries: SelectItem[];

    countrycodes: SelectItem[];

    selectedCountry: any;

    selectedCountries: string[] = [];

    activeIndex = 0;

    constructor(private countryService: CountryService) {

    }

    onFocus() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The dropdown gets focus'});
    }

    onBlur() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The dropwdown loses focus'});
    }

    onChange() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The dropdown is changed'});
    }

    onChangeMultiselect() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The Multiselect selection is changed'});
    }

    generateCountries(countriesArray: Country[]) {
        const countryList: any[] = [];
        const countryCodes: any[] = [];
        for (const country of countriesArray) {
            countryList.push({label: country.name, value: {name: country.name, dial_code: country.dial_code, code: country.code}});
            countryCodes.push({label: country.code, value: {name: country.name, dial_code: country.dial_code, code: country.code}});
        }
        this.countries = countryList;
        this.countrycodes = countryCodes;
    }

    ngOnInit() {
        this.countryService.getCountries().subscribe((countriesArray: Country[]) => {
            this.generateCountries(countriesArray);
        });
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
