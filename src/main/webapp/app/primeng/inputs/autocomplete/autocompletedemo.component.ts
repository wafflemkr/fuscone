import {Component, OnInit } from '@angular/core';
import {Message, SelectItem} from 'primeng/components/common/api';
import {CountryService} from './service/country.service';
import Country from './service/country';

@Component({
    selector: 'jhi-autocomplete',
    templateUrl: './autocompletedemo.component.html',
    styles: []
})
export class AutocompleteDemoComponent implements OnInit {
    country: Country;
    countries: Country[];
    topcountry: string;
    topcountrySingle: string;
    topAsianCountry: string;
    countryInstance: Country;
    customCountry: Country;
    topAsiaCountries: string[] = ['Singapore', 'Hong Kong', 'South Korea', 'Japan', 'Israel',
        'Brunei', 'Qatar', 'Cyprus', 'Saudi Arabia', 'United Arab Emirates'];
    filteredCountries: Country[];
    filteredCountriesMultiple: Country[];
    filteredTopAsiaCountries: any[];
    filteredCountryInstances: Country[];
    filteredCustomCountries: Country[];
    selectedType = 'readonly';
    types: SelectItem[];
    msgs: Message[] = [];
    activeIndex = 0;

    constructor(private countryService: CountryService) {
    }

    onFocus() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The autocomplete gets focus'});
    }

    onBlur() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The autocomplete loses focus'});
    }

    onSelect() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The autocomplete suggestion is selected'});
    }

    onUnselect() {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The autocomplete selected item is removed'});
    }

    onClearInput(event: any) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'The autocomplete input is cleared'});
    }

    filterCountryInstances(event: any) {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCountryInstances = this.filterCountry(query, countries);
        });
    }

    filterCountries(event: any) {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCountries = this.filterCountry(query, countries);
        });
    }

    filterCountriesMultiple(event: any) {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }

    filterCustomCountries(event: any) {
        const query = event.query;
        this.countryService.getCountries().subscribe((countries: Country[]) => {
            this.filteredCustomCountries = this.filterCountry(query, countries);
        });
    }

    filterTopAsiaCountries(event: any) {
        this.filteredTopAsiaCountries = [];
        for (const country of this.topAsiaCountries) {
            if (country.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredTopAsiaCountries.push(country);
            }
        }
    }

    handleDropdownClick() {
        this.filteredTopAsiaCountries = [];
        setTimeout(() => {
            this.filteredTopAsiaCountries = this.topAsiaCountries;
        }, 100);
    }

    filterCountry(query: any, countries: Country[]): Country[] {
        const filtered: any[] = [];
        for (const country of countries) {
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    ngOnInit() {
        this.types = [];
        this.types.push({label: 'ReadOnly', value: 'readonly'});
        this.types.push({label: 'Disabled', value: 'disable'});
    }

    onChangeStep(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
}
