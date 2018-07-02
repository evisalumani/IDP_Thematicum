import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { Routing } from "./app.routing";
import { ErrorComponent } from './error/error.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

// Services
import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { ThemeService } from './theme.service';
import { AuthGuard } from './auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ThemeSearchComponent } from './theme-search/theme-search.component';
import { AboutComponent } from './about/about.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AutocompleteContainerComponent } from './autocomplete-container/autocomplete-container.component';
import { AutocompleteStockAllocationComponent } from './autocomplete-stock-allocation/autocomplete-stock-allocation.component';
import { AutocompleteTagsComponent } from './autocomplete-tags/autocomplete-tags.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ThemeCreationComponent } from './theme-creation/theme-creation.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { ModalComponent } from './modal/modal.component';
import { ThemeCharacteristicsEditingComponent } from './theme-characteristics-editing/theme-characteristics-editing.component';
import { ThemePropertiesComponent } from './theme-properties/theme-properties.component';
import { ThemeStockAllocationComponent } from './theme-stock-allocation/theme-stock-allocation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ErrorComponent,
    SignupComponent,
    SigninComponent,
    HomepageComponent,
    ThemeSearchComponent,
    AboutComponent,
    UserProfileComponent,
    // AutocompleteContainerComponent,
    AutocompleteStockAllocationComponent,
    AutocompleteTagsComponent,
    AutocompleteComponent,
    ThemeCreationComponent,
    ThemeDetailsComponent,
    ModalComponent,
    ThemeCharacteristicsEditingComponent,
    ThemePropertiesComponent,
    ThemeStockAllocationComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //AutocompleteComponent
  ],
  providers: [AuthService, ErrorService, ThemeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
