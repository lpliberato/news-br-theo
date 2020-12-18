import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitleSmallComponent } from './subtitle-small.component';

describe('SubtitleComponent', () => {
  let component: SubtitleSmallComponent;
  let fixture: ComponentFixture<SubtitleSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubtitleSmallComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtitleSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
