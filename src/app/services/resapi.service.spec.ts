import { TestBed } from '@angular/core/testing';

import { ResapiService } from './resapi.service';

describe('ResapiService', () => {
  let service: ResapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
