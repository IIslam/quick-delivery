import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

import { AuthorizationStateService } from '../../../state'
import * as applicationSettings from "application-settings";

@Injectable()
export class AuthrizationGuardService implements CanActivate, CanActivateChild {
    /**
     *
     */
    constructor(
        private router: Router,
        private authorizationStateService: AuthorizationStateService
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authorizationStateService.selectIsAuthenticated().map(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        });

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.authorizationStateService.selectIsAuthenticated().map(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        });
    }
}