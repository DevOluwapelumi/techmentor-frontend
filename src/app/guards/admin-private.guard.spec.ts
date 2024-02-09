import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { adminPrivateGuard } from './admin-private.guard';

describe('adminPrivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminPrivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
