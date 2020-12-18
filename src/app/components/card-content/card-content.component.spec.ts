import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NewsMock } from 'src/app/mocks/news.mock';
import { NewsBrApiService } from 'src/app/services/news-br-api.service';

import { CardContentComponent } from './card-content.component';

describe('CardComponent', () => {
  let component: CardContentComponent;
  let fixture: ComponentFixture<CardContentComponent>;
  let service: NewsBrApiService;
  let mock: NewsMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardContentComponent],
      imports: [HttpClientModule],
      providers: [NewsBrApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContentComponent);
    service = TestBed.get(NewsBrApiService);
    component = fixture.componentInstance;
    mock = new NewsMock();
  });

  it('should create', () => {
    spyOn(service, 'getTopHeadlines').and.returnValue(of(mock.news1));
    expect(component).toBeTruthy();
    fixture.detectChanges();
  });

  it('should test if the index will not be increased', () => {
    component.news = mock.news1;
    component.incrementIndex();
    expect(component.currentIndex === 0).toBeTrue();
    fixture.detectChanges();
  });

  it('should test if the index will be increased', () => {
    component.news = mock.news2;
    component.incrementIndex();
    expect(component.currentIndex !== 0).toBeTrue();
    fixture.detectChanges();
  });

  it('should test if the index will not be decremented', () => {
    component.currentIndex = 0;
    component.decrementIndex();
    expect(component.currentIndex === 0).toBeTrue();
    fixture.detectChanges();
  });

  it('should test if the index will be decremented', () => {
    component.news = mock.emptyArticles;
    component.currentIndex = 1;
    component.decrementIndex();
    expect(component.currentIndex === 0).toBeTrue();
    fixture.detectChanges();
  });

  it('should test if onClickIncrement works', () => {
    component.news = mock.news2;
    component.onClickIncrement();
    expect(component.currentIndex !== 0).toBeTrue();
    fixture.detectChanges();
  });

  it('should test if onClickDecrement works', () => {
    component.news = mock.emptyArticles;
    component.currentIndex = 1;
    component.onClickDecrement();
    expect(component.currentIndex === 0).toBeTrue();
    fixture.detectChanges();
  });
});
