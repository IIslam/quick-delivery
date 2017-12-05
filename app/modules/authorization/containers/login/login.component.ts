import { Component, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { Observable, Subscription } from 'rxjs/Rx';

import { MembershipCredentialsModel } from '../../../../proxy';
import { AuthorizationStateService } from '../../../../state';

@Component({
  selector: 'epw-login',
  moduleId: module.id,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy {
  subscriptions: Subscription[] = [];
  errorMessage$: Observable<string>;
  showLoading$: Observable<Boolean>;

  constructor(
    private authorizationStateService: AuthorizationStateService,
    private routerExtentions: RouterExtensions
  ) {
    this.errorMessage$ = this.authorizationStateService.selectErrorMessage();
    this.showLoading$ = this.authorizationStateService.selectIsLoading();

    this.subscriptions.push(this.authorizationStateService.selectIsAuthenticated()
      .subscribe(value => {
        // Switch Case on isAuthenticated Enum and then Route to each module according to value
        if (value) {
          this.routerExtentions.navigate(['/'], { clearHistory: true });
        }
        // ------------------------------------------------------------------------
      }));
  }

  onLoginEvent(model: MembershipCredentialsModel) {
    this.authorizationStateService.dispatchLoginAction(model)
  }

  ngOnDestroy(): void {
    for (const i in this.subscriptions) {
      this.subscriptions[i].unsubscribe();
    }
  }
}
