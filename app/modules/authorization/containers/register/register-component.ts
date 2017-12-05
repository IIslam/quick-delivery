import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import * as applicationSettings from 'application-settings';
import { RouterExtensions } from 'nativescript-angular';

import { RegisterationModel } from '../../../../proxy'
import { AuthorizationStateService } from '../../../../state'
@Component({
    selector: 'epw-register',
    moduleId: module.id,
    templateUrl: './register-container.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegisterComponent implements OnDestroy {
    subscriptions: Subscription[] = [];
    constructor(
        private routerExtensions: RouterExtensions,
        private authorizationStateService: AuthorizationStateService
    ) {
        this.subscriptions.push(this.authorizationStateService.selectISRegisterd()
            .subscribe(value => {
                console.log(value);
                if (value) {
                    this.routerExtensions.navigate(['/confirm'], { clearHistory: true });
                }
            }));
    }

    Onregister(model: RegisterationModel) {
        console.log("register");
        this.authorizationStateService.dispatchRegisterAction(model);

    }

    ngOnDestroy(): void {
        for (const i in this.subscriptions) {
            this.subscriptions[i].unsubscribe();
        }
    }

}