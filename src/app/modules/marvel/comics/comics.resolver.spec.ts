import { TestBed } from '@angular/core/testing';

import { ComicsResolver } from './comics.resolver';

describe('ComicsResolver', () => {
  let resolver: ComicsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ComicsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
