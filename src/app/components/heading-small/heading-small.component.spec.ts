import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingSmallComponent } from './heading-small.component';

describe('HeadingComponent', () => {
  let component: HeadingSmallComponent;
  let fixture: ComponentFixture<HeadingSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeadingSmallComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
