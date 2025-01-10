import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  console.log('Checking authentication...');
  const isAuthenticated = loginService.isAuthenticated();
  console.log('Is user authenticated?', isAuthenticated);

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/auth']);
    return false;
  }
};
