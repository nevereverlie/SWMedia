/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FilmsService } from './films.service';

describe('Service: Films', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmsService]
    });
  });

  it('should ...', inject([FilmsService], (service: FilmsService) => {
    expect(service).toBeTruthy();
  }));
});
