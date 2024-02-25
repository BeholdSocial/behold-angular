import { TestBed } from '@angular/core/testing';

import { BeholdWidgetService } from './AngularWidget.service';

describe('BeholdWidgetService', () => {
  let service: BeholdWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeholdWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
