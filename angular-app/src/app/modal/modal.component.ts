import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public visible = false;
  public visibleAnimate = false;
  private data: any; //a variable to allow the modal to carry context data

  constructor() { }

  ngOnInit() {
  }

  setData(contextData: any) {
      this.data = contextData;
  }

  getData(): any {
      return this.data;
  }

  show(): void {
      this.visible = true;
      setTimeout(() => this.visibleAnimate = true);
  }

  hide(): void {
      this.visibleAnimate = false;
      this.visible = false;
  }
}
