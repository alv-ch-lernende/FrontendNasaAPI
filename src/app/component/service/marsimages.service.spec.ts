import { TestBed } from '@angular/core/testing';

import { MarsimagesService } from './marsimages.service';

describe('MarsimagesService', () => {
  let service: MarsimagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarsimagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
