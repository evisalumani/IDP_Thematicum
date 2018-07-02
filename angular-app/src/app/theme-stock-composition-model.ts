import {Theme} from "./theme";
import {StockModel} from "./stock-model";
export class ThemeStockCompositionModel {
    constructor(public _id: string, public theme: Theme, public stock: StockModel) {}
}