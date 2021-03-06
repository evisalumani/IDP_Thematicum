import {AutocompleteItem} from "./autocomplete-item";
export class StockModel extends AutocompleteItem {
    constructor(
        public name: string,
        public alias: string,
        public _id: string,
        public businessDescription: string,
        public country: string,
        public website: string,
        public exchange: string,
        public reportingCurrency: string,
    ) { super(name, alias, _id); }
}