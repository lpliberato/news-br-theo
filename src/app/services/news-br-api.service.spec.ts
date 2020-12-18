import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NewsBrApiService } from './news-br-api.service';

describe('NewsBrApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [NewsBrApiService]
  }));

  it('should be created', () => {
    const service: NewsBrApiService = TestBed.get(NewsBrApiService);
    expect(service).toBeTruthy();
  });
});
