import { TestBed, inject } from '@angular/core/testing';

import { InfoboxService } from './infobox.service';

describe('InfoboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoboxService]
    });
  });

  it('should be created', inject([InfoboxService], (service: InfoboxService) => {
    expect(service).toBeTruthy();
  }));
});
