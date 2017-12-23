import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthorizationStateService } from '../../../state';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    constructor(private authorizationStateService: AuthorizationStateService,
        private routerExtentions: RouterExtensions) {
    }

    onSignout() {
        this.authorizationStateService.dispatchLogoutAction();
        this.routerExtentions.navigate(['/login', { clearHistory: true }]);
    }

    text: string = 'Contact Page';
}
