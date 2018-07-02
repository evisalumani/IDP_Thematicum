import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

import {AuthService} from "../auth.service";
import {UserModel} from "../user-model";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user: UserModel = new UserModel();
    constructor(private authService: AuthService) {}

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        this.authService.signin(this.user).subscribe(data => {
            //store auth data in local storage
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.username);
        },
        error => form.reset());
    }

}
