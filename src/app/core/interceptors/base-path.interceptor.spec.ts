import { TestBed } from '@angular/core/testing';

import { BasePathInterceptor } from './base-path.interceptor';

describe('BasePathInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BasePathInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BasePathInterceptor = TestBed.inject(BasePathInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
