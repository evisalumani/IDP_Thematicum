import { Component, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import {Theme} from "../theme";
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {ThemeService} from "../theme.service";
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit, OnChanges {

  theme: Theme; //theme retrieved from the service
  selectedThemeId: string; //theme Id retrieved from the url
  isEditMode = false; //to show/hide theme-editing form

  @ViewChild(ModalComponent)
  public modal: ModalComponent;

  constructor(private route: ActivatedRoute, private router: Router, private themeService: ThemeService) { }

  ngOnInit(): void {
      if(!this.route.snapshot.params['id']) {
          return;
      }

      this.selectedThemeId = this.route.snapshot.params['id'];
      this.themeService.getThemeById(this.selectedThemeId).subscribe(
          data => {
              console.log('Theme');
              console.log(data);
              this.theme = data;
          },
          error => console.log('Error: ', error));
  }

  ngOnChanges(changes: SimpleChanges): void {}

  toggleEditMode() {
      this.isEditMode = !this.isEditMode;
  }

  onThemeChanged(theme: Theme) {
      this.theme = theme;
      this.isEditMode = false;
  }

  deleteTheme(modal: any) {
      modal.hide();
      this.themeService.deleteTheme(this.selectedThemeId).subscribe(
          data => {
              console.log(data);
              this.router.navigate(['/search']);
          },
          error => console.log(error));
  }
}
