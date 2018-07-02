import { Component, OnInit } from '@angular/core';
import {ErrorService} from "../error.service";
import {Error} from '../error';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  error: Error = null;
  constructor(private  errorService: ErrorService) { }

  ngOnInit() {
    this.errorService.errorOccurred.subscribe(
      (error: Error) => {
          this.error = error;
      }
    )
  }

}