import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  // Check if the user is logged in
  if (userService.user$() && !userService.isTokenExpired()) {
  return true;
  }
  // If not logged in, redirect to the login page
  return router.navigate(['/login']);
};
