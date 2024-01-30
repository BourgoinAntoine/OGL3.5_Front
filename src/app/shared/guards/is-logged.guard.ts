import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { SessionService } from 'src/app/core/services/session.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const _sessionService: SessionService = inject(SessionService);
  
  return !!_sessionService.currentUser;
};
