import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading-small.component.html',
  styleUrls: ['./heading-small.component.scss']
})
export class HeadingSmallComponent implements OnInit {

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
