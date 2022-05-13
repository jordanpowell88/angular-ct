import { TestBed } from '@angular/core/testing';

import { OverridesService } from './overrides.service';

describe('OverridesService', () => {
  let service: OverridesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [OverridesService],
    teardown: { destroyAfterEach: false }
});
    service = TestBed.inject(OverridesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
