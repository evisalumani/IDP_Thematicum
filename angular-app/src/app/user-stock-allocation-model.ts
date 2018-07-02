import {ThemeStockCompositionModel} from "./theme-stock-composition-model";
export class UserStockAllocationModel {
    constructor(public _id: string, public themeStockComposition: ThemeStockCompositionModel, public exposure: number) {}
}