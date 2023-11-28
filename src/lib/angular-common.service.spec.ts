import { TestBed } from '@angular/core/testing';

import { AngularCommonService } from './angular-common.service';

describe('AngularCommonService', () => {
  let service: AngularCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
