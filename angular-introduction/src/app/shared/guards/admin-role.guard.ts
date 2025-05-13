import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { has } from 'lodash-es';

export const adminRoleGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  const userRoles = userService.user$()?.roles;
  const hasPermission = userRoles?.includes('ADMIN');
  console.log('ADMIN ROLE GUARD', userRoles, hasPermission);

  // Check if the user has the 'ADMIN' role
  if (userService.user$() && hasPermission) {
  return true;
  } 
  // If not, redirect to the login page
  return router.navigate(['/login']);
  
};
