import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {ModalComponent} from "../modal/modal.component";
import {Observable} from "rxjs";
import {StockAllocationModel} from "../stock-allocation-model";
import {ThemeService} from "../theme.service";
import {ThemeStockCompositionAllocationModel} from "../theme-stock-composition-allocation-model";

@Component({
  selector: 'app-theme-stock-allocation',
  templateUrl: './theme-stock-allocation.component.html',
  styleUrls: ['./theme-stock-allocation.component.css']
})
export class ThemeStockAllocationComponent implements OnInit {

  @Input() themeId: string;
  exposures = ['Strongly Positive', 'Weakly Positive', 'Neutral', 'Weakly Negative', 'Strongly Negative'];
  allocatedStockIds: string[]; //to prefilter stocks available in autocomplete
  showAddOtherStocksButton: boolean = false; //to show/hide "Add Other Stocks" button
  stockAllocationData: ThemeStockCompositionAllocationModel[] = []; //to hold data received from the service
  selectedExposure: number; //to hold the exposure value edited by the user

  @ViewChild(ModalComponent)
  public modal: ModalComponent;

  //colors listed from strongly-positive to strongly-negative exposures
  readonly exposureBackgroundColors = [
      {name: 'STRONGLY_POSITIVE_EXPOSURE_COLOR', r:39, g:174, b:96},
      {name: 'WEAKLY_POSTIVE_EXPOSURE_COLOR', r: 26, g:188, b:156},
      {name: 'NETURAL_EXPOSURE_COLOR', r:41, g:128, b:185},
      {name: 'WEAKLY_NEGATIVE_EXPOSURE_COLOR', r:155, g:89, b:182},
      {name: 'STRONGLY_NEGATIVE_EXPOSURE_COLOR', r:192, g:57, b:43}];

  readonly BORDER_EXPOSURE = 'solid 2px #34495e';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
      this.getComponentDataObservable()
          .subscribe(this.handleResults, this.handleError);
  }

  setExposureBackgroundColor(isAllocationEditable: boolean, exposureIndex: number, percentage: number) {
      if (isAllocationEditable) {
          return;
      }

      const backgroundColor = this.exposureBackgroundColors[exposureIndex];
      return `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${percentage/100})`;
  }

  setBorder(allocationModel: ThemeStockCompositionAllocationModel, exposureIndex: number) {
      return allocationModel.userStockAllocation && allocationModel.userStockAllocation.exposure == exposureIndex ? this.BORDER_EXPOSURE : '';
  }

  setDataToggleAttribute(isAllocationEditable: boolean) {
      return isAllocationEditable ? 'buttons' : '';
  }

  toggleStockAllocationEditable(allocationModel: ThemeStockCompositionAllocationModel) {
      //TODO: delegation causes errors
      allocationModel.isAllocationEditable = !allocationModel.isAllocationEditable;
  }

  clearEditing(allocationModel: ThemeStockCompositionAllocationModel, containerDiv: Element) {
      this.toggleStockAllocationEditable(allocationModel);
      this.selectedExposure = null;

      if(!containerDiv) {
          return;
      }

      //remove active class from labels
      let labels = containerDiv.querySelectorAll('label.active');
      for (let i = 0; i<labels.length; i++) {
          labels[i].classList.remove('active');
      }
  }

  selectExposure(exposure: number) {
      this.selectedExposure = exposure;
  }

  toggleShowAddOtherStocksButton() {
      this.showAddOtherStocksButton = !this.showAddOtherStocksButton;
  }

  getExposureDistributionStr(nrUsers: number) {
      const trailingS = nrUsers != 1 ? 's' : '';
      return `(${nrUsers} user${trailingS})`;
  }

  createOrUpdateStockAllocation(allocationModel: ThemeStockCompositionAllocationModel) {
      if (!this.selectedExposure) return;

      //create or update, depending on whether the user has an existing allocation for the given theme-stock composition
      const modelChangedObservable: Observable<any> = allocationModel.userStockAllocation ?
          this.themeService.updateUserStockAllocation(allocationModel.userStockAllocation._id, this.selectedExposure) :
          this.themeService.createUserStockAllocation(allocationModel.themeStockComposition._id, this.selectedExposure);

      modelChangedObservable.flatMap(data => {
          console.log(data);
          return this.getComponentDataObservable(); //reload model
      }).subscribe(this.handleResults, this.handleError);
  }

  deleteUserStockAllocation(modal: ModalComponent) {
      const allocationId = modal.getData();
      modal.hide();
      this.themeService.deleteUserStockAllocation(allocationId)
          .flatMap(data => {
              console.log(data);
              return this.getComponentDataObservable(); //reload model
          })
          .subscribe(this.handleResults, this.handleError);
  }

  createStockCompositionAndAllocation(allocations: StockAllocationModel[]) {
      this.toggleShowAddOtherStocksButton();
      this.themeService.createManyStockCompositionsAndAllocations(this.themeId, allocations)
          .flatMap(data => {
              console.log(data);
              return this.getComponentDataObservable(); //reload model
          })
          .subscribe(this.handleResults, this.handleError);
  }

  getComponentDataObservable() {
      return this.themeService.getThemeStockAllocationDistribution(this.themeId);
  }

  handleResults = (data: ThemeStockCompositionAllocationModel[]) => {
      console.log('Stock Allocations');
      console.log(data);
      this.stockAllocationData = data;
      this.allocatedStockIds = data.map(allocation => allocation.themeStockComposition.stock._id); //set allocated stock Ids
  }

  handleError = (error: any) => {
      console.log('Error: ' + error);
  }

}