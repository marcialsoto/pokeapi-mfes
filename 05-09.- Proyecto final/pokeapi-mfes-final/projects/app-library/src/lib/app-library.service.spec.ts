import { TestBed } from '@angular/core/testing';

import { AppLibraryService } from './app-library.service';

describe('AppLibraryService', () => {
  let service: AppLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
