import {DataDistributionModel} from "./data-distribution-model";
import {ThemeStockCompositionModel} from "./theme-stock-composition-model";
import {UserStockAllocationModel} from "./user-stock-allocation-model";

export class ThemeStockCompositionAllocationModel {
    isAllocationEditable: boolean;
    constructor(
        public exposures: DataDistributionModel[],
        public userStockAllocation: UserStockAllocationModel,
        public themeStockComposition: ThemeStockCompositionModel,
        public totalCount: number) {
        this.isAllocationEditable = false;
    }

    public toggleIsAllocationEditable() {
        this.isAllocationEditable = !this.isAllocationEditable;
    }
}