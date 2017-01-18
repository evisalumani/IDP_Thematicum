import {
    Component, ElementRef, OnInit, EventEmitter, OnChanges, SimpleChanges, SimpleChange,
    DoCheck
} from '@angular/core';
import {AutocompleteList} from "./autocomplete-list";
import {items} from "./dummy-data";
import {Input, Output} from "@angular/core/src/metadata/directives";
import {AutocompleteDatasourceService} from "./autocomplete-datasource.service";
import {AutocompleteItem} from "./autocomplete-item";
import {ThemeTagsService} from "../theme_creation/theme-tags.service";


@Component({
    selector: 'app-autocomplete',
    templateUrl: 'autocomplete.component.html',
     host: {
     '(document:click)': 'handleClick($event)',
     '(keydown)': 'handleKeyDown($event)'
     }
})
export class AutoCompleteComponent implements OnChanges {
    const KEY_ARROW_UP = 38;
    const KEY_ARROW_DOWN = 40;
    const KEY_ENTER = 13;

    position: number = -1;
    autocompleteList: AutocompleteList = new AutocompleteList();

    @Input('allowCustomValues') allowUserEnteredValues: boolean;
    @Input() allowEnterKey: boolean;
    @Input() dataSource: AutocompleteItem[];
    @Input() placeholderTerm: string;
    @Output() notifySelectedItem: EventEmitter<any> = new EventEmitter<any>();
    @Output() clearErrorStr: EventEmitter<any> = new EventEmitter<any>();
    @Input() allowDirectClick: boolean;
    currentlySelectedItem: AutocompleteItem;

    constructor(private elementRef: ElementRef) {}

    ngOnChanges(changes: SimpleChanges): void {
        var autocompleteItemsChange: AutocompleteItem[] = changes.dataSource.currentValue;
        if (autocompleteItemsChange) {
            this.autocompleteList.list = this.dataSource;
        }
    }

    /** set filteredList to the items containing the query */
    filterQuery() {
        this.autocompleteList.filterList();
    }

    /** input keyup event handler */
    filter(event: any) {
        console.log('filter')
        //set 'selected' to false for all items in the filteredList
        this.clearCurrentlySelectedItem();
        this.autocompleteList.deselectAll();
        this.clearErrorStr.emit(); //clear error string

        switch(event.keyCode) {
            case this.KEY_ARROW_UP:
                this.handleKeyArrowUp();
                break;
            case this.KEY_ARROW_DOWN:
                this.handleKeyArrowDown();
                break;
            case this.KEY_ENTER:
                this.handleKeyEnter();
                break;
            default:
                this.filterQuery();
        }

        // Handle scroll position of item (Not convinced)
        // let listGroup = document.getElementById('list-group');
        // let listItem = document.getElementById('true');
        // if (listItem) {
        //     //listGroup.scrollTop = (411 - listItem.offsetTop);
        //     listGroup.scrollTop = (listItem.offsetTop - 200);
        // }
    }

    handleKeyArrowUp() {
        if (this.position > 0)
            this.position--;
        this.autocompleteList.selectItem(this.position);
    }

    handleKeyArrowDown() {
        if (this.position + 1 != this.autocompleteList.filteredList.length)
            this.position++;
        this.autocompleteList.selectItem(this.position);

    }

    handleKeyEnter() {
        if (!this.allowEnterKey) {
            return;
        }

        let itemToAdd = this.autocompleteList.getItemAt(this.position);

        if (itemToAdd) {
            this.autocompleteList.selectItem(this.position);
            this.addSelectedItem(itemToAdd);
        } else if (this.allowUserEnteredValues) {
            this.addSelectedItem({name: this.autocompleteList.query});
        }
    }

    addSelectedItem(item: any) {
        this.notifySelectedItem.emit(item);

        if (!this.allowDirectClick) {
            this.currentlySelectedItem = item;
            this.autocompleteList.query = this.currentlySelectedItem.name;
        }

        this.cleanup(!this.allowDirectClick)
    }

    handleKeyDown(event: any) {
        // Prevent default actions of arrow keys
        if (event.keyCode == this.KEY_ARROW_DOWN || event.keyCode == this.KEY_ARROW_UP || event.keyCode == this.KEY_ENTER) {
            event.preventDefault();
        }
    }

    /** Handle outside click to close autocomplete list **/
    handleClick(event: any) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            //if the click occurs in an element (event.target) contained in elementRef, then empty filtered list
            this.cleanup(!this.allowDirectClick);
        }
    }

    cleanup(keepQuery: boolean) {
        if (!keepQuery || this.currentlySelectedItem == null) {
            this.autocompleteList.query = '';
        }
        this.position = -1;
        this.autocompleteList.deselectAll();
        this.autocompleteList.emptyList();
    }

    clearCurrentlySelectedItem() {
        this.currentlySelectedItem = null;
    }
}