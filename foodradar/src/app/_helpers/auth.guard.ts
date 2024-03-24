import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
    const router = Inject(Router);
    // Votre logique d'authentification ici
    const isAuthenticated = false; // Remplacez ceci par votre logique d'authentification

    if (!isAuthenticated) {
      router.navigate(['/auth']);
      return false;
    }

    return true;
};
