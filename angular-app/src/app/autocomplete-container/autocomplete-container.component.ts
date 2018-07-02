import { Component, OnInit } from '@angular/core';
import {AutocompleteItem} from "../autocomplete-item";
import {AutocompleteItemSelectionInterface} from "../autocomplete-item-selection-interface";
import {AutocompleteDatasourceService} from "../autocomplete-datasource.service";

// @Component({
//   selector: 'app-autocomplete-container',
//   templateUrl: './autocomplete-container.component.html',
//   styleUrls: ['./autocomplete-container.component.css']
// })
export class AutocompleteContainerComponent implements AutocompleteItemSelectionInterface {

  error: string = '';
  itemList: AutocompleteItem[] = []; //data source (all items)
  selectedItems: any[] = [];
  duplicateChosenErrorStr: string = 'This item has already been selected. Please choose another one';

  constructor(
      public dataSource: AutocompleteDatasourceService,
      public dataSourceAPI: string,
      public autocompletePlaceholder: string,
      public allowCustomValues: boolean,
      public allowEnterKey: boolean,
      public allowDirectClick: boolean
  ) {}

  clearErrorStr() {
      this.error = '';
  }

  setErrorStr(errorStr: string) {
      this.error = errorStr;
  }

  selectItem(item: any) {}

  deselectItem(index: number) {
      if (index >= 0 && index < this.selectedItems.length) {
          this.selectedItems.splice(index, 1);
      }
  }

  preFilter() {}

  initializeAutocompleteData(data: any) {}

  handleResults = (data: any) => {
      this.initializeAutocompleteData(data);
      this.preFilter();
  }

  handleError = (error: any) => {
      console.log('Error: ' + error);
  }

}
