import { Component, OnInit } from '@angular/core';
import {Theme} from "../theme";
import {NgForm} from "@angular/forms";
import {ThemeService} from "../theme.service";
import {Router} from "@angular/router";
import {ThemePropertiesEditModel} from "../theme-properties-edit-model";
import {AutocompleteContainerComponent} from "../autocomplete-container/autocomplete-container.component";
import {timeHorizonValues, maturityValues, categoryValues} from "../theme-property-values";
import {Observable} from "rxjs";

@Component({
  selector: 'app-theme-creation',
  templateUrl: './theme-creation.component.html',
  styleUrls: ['./theme-creation.component.css']
})
export class ThemeCreationComponent implements OnInit {

  theme: Theme = new Theme();
  themeProperties: ThemePropertiesEditModel = new ThemePropertiesEditModel();
  createdThemeId: string;

  timeHorizonValues = timeHorizonValues;
  maturityValues = maturityValues;
  categoryValues = categoryValues;
  maxDescriptionLength: number = 500;

  constructor(private themeService: ThemeService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm, themeTags: AutocompleteContainerComponent, themeStockAllocation: AutocompleteContainerComponent) {
    //update model with data from child components
    this.theme.tags = themeTags.selectedItems;
    this.themeProperties.setCheckedCategories();
    const stockAllocation = themeStockAllocation.selectedItems;

    this.themeService.createTheme(this.theme).flatMap(theme => {
        this.createdThemeId = theme._id;
        let propertiesObservable = this.themeService.createUserThemeInput(theme._id, this.themeProperties);
        let stockAllocationObservable = this.themeService.createManyStockCompositionsAndAllocations(theme._id, stockAllocation);

        return Observable.forkJoin([propertiesObservable, stockAllocationObservable]);
    }).subscribe(this.handleResults, this.handleError)
  }

  handleResults = (data: any) => {
      this.router.navigate(['/theme', this.createdThemeId]);
  }

  handleError = (error: any) => {
      console.log('Error: ' + error);
  }

  getDescriptionCharactersRemaining(): string {
      const descriptionLength = this.theme.description ? this.theme.description.length : 0;
      return `${this.maxDescriptionLength - descriptionLength} characters remaining`;
  }
}