import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {ThemeService} from "../theme.service";
import {ThemePropertiesEditModel} from "../theme-properties-edit-model";
import {ModalComponent} from "../modal/modal.component";
import {NgForm} from "@angular/forms";
import {timeHorizonValues, maturityValues, categoryValues} from "../theme-property-values";
import {Observable} from "rxjs";

@Component({
  selector: 'app-theme-properties',
  templateUrl: './theme-properties.component.html',
  styleUrls: ['./theme-properties.component.css']
})
export class ThemePropertiesComponent implements OnInit {

  @Input() themeId: string;
  themePropertiesData: any; //to hold data received from the service
  isEditMode: boolean = false; //to indicate display/edit mode
  themeProperties: ThemePropertiesEditModel = new ThemePropertiesEditModel(); //for user editing data

  //property values needed for display
  timeHorizonValues = timeHorizonValues;
  maturityValues = maturityValues;
  categoryValues = categoryValues;

  readonly BLUE_THEME_PROPERTY_COLOR = {r: 41, g: 128, b: 185};
  readonly BORDER_THEME_PROPERTY = 'solid 2px #34495e';

  @ViewChild(ModalComponent)
  public modal: ModalComponent;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
      this.getComponentDataObservable().subscribe(this.handleResults, this.handleError);
  }

  getComponentDataObservable() {
      return this.themeService.getThemeProperties(this.themeId);
  }

  handleResults = (data: any) => {
      console.log('Theme properties');
      console.log(data);
      this.themePropertiesData = data;
  }

  handleError = (error: any) => {
      console.log('Error: ' + error);
  }

  getPropertyVoteDistributionStr(percentage: number, nrUsers: number) {
      let trailingS = nrUsers != 1 ? 's' : '';
      return `${percentage}% (${nrUsers} user${trailingS})`;
  }

  clearEditing(containerDiv: Element) {
      this.isEditMode = !this.isEditMode;
      this.themeProperties.clearProperties();

      if(!containerDiv) {
          return;
      }

      //TODO: undefined containerDiv
      let labels = containerDiv.querySelectorAll('label.active');
      for (let i = 0; i<labels.length; i++) {
          labels[i].classList.remove('active');
      }
  }

  setDataToggleAttribute() {
      return this.isEditMode ? 'buttons' : '';
  }

  setBackgroundColor(percentage: number) {
      if (this.isEditMode) {
          return;
      }

      return `rgba(${this.BLUE_THEME_PROPERTY_COLOR.r}, ${this.BLUE_THEME_PROPERTY_COLOR.g}, ${this.BLUE_THEME_PROPERTY_COLOR.b}, ${percentage/100})`;
  }

  setBorder(propertyName: string, value: number) {
      if (!this.themePropertiesData.userInputs) {
          return;
      }
      if (propertyName !== 'categories') {
          return this.themePropertiesData.userInputs[propertyName] == value ? this.BORDER_THEME_PROPERTY : '';
      } else {
          return this.themePropertiesData.userInputs[propertyName].indexOf(value) >= 0 ? this.BORDER_THEME_PROPERTY : '';
      }
  }

  clearUserInputs() {
      this.isEditMode = false;
      this.themeProperties.clearProperties();
  }

  createOrUpdateThemeProperty(form: NgForm) {
      this.themeProperties.setCheckedCategories();
      /*if there isn't any existing user input for this theme, create new
       otherwise, update existing
       */
      let themePropertyChangedObservable: Observable<any> = this.themePropertiesData.userInputs ?
          this.themeService.updateUserThemeInput(this.themePropertiesData.userInputs._id, this.themeProperties) :
          this.themeService.createUserThemeInput(this.themeId, this.themeProperties);
      this.clearUserInputs();

      themePropertyChangedObservable.flatMap(data => {
          console.log(data);
          return this.getComponentDataObservable(); //reload model
      }).subscribe(this.handleResults, this.handleError);
  }

  deleteUserThemeInput(modal: any) {
      modal.hide();
      if(!this.themePropertiesData.userInputs) {
          return;
      }

      let themePropertyDeletedObservable: Observable<any> = this.themeService.deleteUserThemeInput(this.themePropertiesData.userInputs._id);

      this.clearUserInputs();

      themePropertyDeletedObservable.flatMap(data => {
          console.log(data);
          return this.getComponentDataObservable(); //reload model
      }).subscribe(this.handleResults, this.handleError);
  }
}
