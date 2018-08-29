import { TestBed, inject } from '@angular/core/testing';

import { NgxConfirmBoxService } from './ngx-confirm-box.service';

describe('NgxConfirmBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxConfirmBoxService]
    });
  });

  it('should be created', inject([NgxConfirmBoxService], (service: NgxConfirmBoxService) => {
    expect(service).toBeTruthy();
  }));
});
