import { TestBed } from '@angular/core/testing';

import { FormFlowService } from './form-flow.service';

describe('FormFlowService', () => {
  let service: FormFlowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormFlowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
