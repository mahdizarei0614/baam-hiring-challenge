import { TestBed } from '@angular/core/testing';

import { ComicDetailsResolver } from './comic-details.resolver';

describe('ComicDetailsResolver', () => {
  let resolver: ComicDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ComicDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
