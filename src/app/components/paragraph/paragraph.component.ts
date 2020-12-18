import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  private _content: string;
  @Input() set content(value: string) {
    this._content = value;
  }

  get content(): string {
    return this._content;
  }

  constructor() { }

  ngOnInit() {
  }

}
