import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    let url: string = state.url;

    return this.authService.isLoggedIn()
    .map(isLoggedIn => {
      if (isLoggedIn) {
        return true;
      } else {
        this.navigateToLogin(url);
        return false;
      }
    })
    .catch(error => {
      this.navigateToLogin(url);
      return Observable.of(false);
    });
  }

  navigateToLogin(url: string) {
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    this.router.navigate(['/signin']);
}
}