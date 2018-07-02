import {Theme} from "./theme";
import {StockAllocationModel} from "./stock-allocation-model";
import {ThemePropertiesEditModel} from "./theme-properties-edit-model";

export interface ThemeServiceInterface {
    createTheme(theme: Theme);
    createManyStockCompositionsAndAllocations(themeId: any, stockAllocation: StockAllocationModel[]);
    createUserThemeInput(themeId: any, themeProperties: ThemePropertiesEditModel);
    updateUserThemeInput(userThemeInputId: any, themeProperties: ThemePropertiesEditModel);
    deleteUserThemeInput(userThemeInputId: string);
    updateTheme(theme: Theme);
    searchThemes(searchTerm: string);
    getThemeById(id: string);
    getThemeProperties(themeId: string);
    getThemeStockAllocationDistribution(themeId: string);
    updateUserStockAllocation(allocationId: string, exposure: number);
    createUserStockAllocation(themeStockCompositionId: string, exposure: number);
    deleteUserStockAllocation(allocationId: string);
    deleteTheme(themeId: string);
}