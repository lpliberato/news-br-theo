import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle-small.component.html',
  styleUrls: ['./subtitle-small.component.scss']
})
export class SubtitleSmallComponent implements OnInit {

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
