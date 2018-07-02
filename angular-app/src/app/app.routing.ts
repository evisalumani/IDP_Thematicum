import {Routes, RouterModule} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {AboutComponent} from "./about/about.component";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {ThemeSearchComponent} from "./theme-search/theme-search.component";
import {ThemeCreationComponent} from "./theme-creation/theme-creation.component";
import {ThemeDetailsComponent} from "./theme-details/theme-details.component";
import {AuthGuard} from "./auth.guard";
import {UserProfileComponent} from "./user-profile/user-profile.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'search', component: ThemeSearchComponent, canActivate: [AuthGuard] },
    { path: 'theme/create', component: ThemeCreationComponent },
    { path: 'theme/:id', component: ThemeDetailsComponent },
    { path: 'profile', component: UserProfileComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);