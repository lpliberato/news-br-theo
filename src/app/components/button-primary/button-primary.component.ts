import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  private _title: string;
  @Input() set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }

  constructor() { }

  ngOnInit() {
  }
}
