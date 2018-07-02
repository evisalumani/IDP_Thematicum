import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../auth.service";
import {UserModel} from "../user-model";
import {SignupModel} from "../signupModel";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: UserModel = new UserModel();
  registrationAccessCode: string;
  personalRoles = [
      'Financial professional (buy side)',
      'Financial professional (sell side)',
      'Financial professional (independent)',
      'Private investor',
      'Other'
  ];

  constructor(private authService: AuthService, private router: Router) {
      this.user.personalRole = this.personalRoles[0]; //default value
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const signupModel = new SignupModel(this.user, this.registrationAccessCode);

    this.authService.signup(signupModel).subscribe(data => this.router.navigateByUrl('/signin'), error => form.reset());
  } 
}
