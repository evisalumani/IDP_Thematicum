import { TestBed, inject } from '@angular/core/testing';

import { AutocompleteDatasourceService } from './autocomplete-datasource.service';

describe('AutocompleteDatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutocompleteDatasourceService]
    });
  });

  it('should be created', inject([AutocompleteDatasourceService], (service: AutocompleteDatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
