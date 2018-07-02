import { Component, OnInit, Input } from '@angular/core';

import {AutocompleteContainerComponent} from "../autocomplete-container/autocomplete-container.component";
import {StockModel} from "../stock-model";
import {AutocompleteDatasourceService} from "../autocomplete-datasource.service";
import {AutocompleteItem} from "../autocomplete-item";
import * as Settings from '../settings';
import {StockAllocationModel} from "../stock-allocation-model";

@Component({
  selector: 'app-autocomplete-stock-allocation',
  templateUrl: './autocomplete-stock-allocation.component.html',
  styleUrls: ['./autocomplete-stock-allocation.component.css'],
  providers: [AutocompleteDatasourceService]
})
export class AutocompleteStockAllocationComponent extends AutocompleteContainerComponent implements OnInit {

  @Input() preFilterStockIds: string[];
  stockExposures = ['Strong Positive', 'Weak Positive', 'Neutral', 'Weak Negative', 'Strong Negative'];
  currentlySelectedStock: StockModel;

  constructor(public dataSource: AutocompleteDatasourceService) {
      super(dataSource,
          Settings.getBaseApi() + 'stocks',
          'Search by company name',
          false, false, false);
  }

  ngOnInit(): void {
      console.log('ngOnInit at AutoCompleteContainerComponent');
      this.dataSource.getAutocompleteList(this.dataSourceAPI).subscribe(this.handleResults, this.handleError);
  }

  initializeAutocompleteData(data: any[]) {
      this.itemList = data.map(item => new StockModel(item.companyName,
                              item.ticker,
                              item._id,
                              item.businessDescription,
                              item.country,
                              item.website,
                              item.exchange,
                              item.reportingCurrency));
  }

  preFilter() {
      if(!this.preFilterStockIds) {
          return;
      }
      //filter stocks already allocated to theme from being displayed in the autocomplete
      this.itemList = this.itemList.filter((item: AutocompleteItem) => this.preFilterStockIds.indexOf(item._id) < 0);
  }

  selectItem(item: any) {
      //TODO: refactor
      /*
          on selecting item: remove that item from the list of suggested stocks
          on removing item: add that item back to the list
       */

      //search by name (assume unique name)
      let existingItem = this.selectedItems.find((el: StockAllocationModel) => {
          return el.stockName == item.name
      });

      //do not add an item if it was already selected
      if(!existingItem) {
          this.currentlySelectedStock = item;
      } else {
          this.error = this.duplicateChosenErrorStr;
      }
  }

  onSelectExposure(index: number, stocksAutocomplete: any) {
      //add allocated stock
      if (this.currentlySelectedStock) {
          this.selectedItems.push(new StockAllocationModel(this.currentlySelectedStock._id, index, this.currentlySelectedStock.name));
          this.currentlySelectedStock = null;
          stocksAutocomplete.clearCurrentlySelectedItem();
      }
  }

}
