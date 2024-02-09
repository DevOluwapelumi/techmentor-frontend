import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminPrivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  return localStorage['isAdmin'] ? true : (router.navigate(['/']))
};
