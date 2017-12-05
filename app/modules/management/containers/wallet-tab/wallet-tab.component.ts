import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';

import { AuthorizationStateService } from '../../../../state'
import * as dtos from '../../../../proxy/dtos';
import * as models from '../../../../proxy/models';

@Component({
    selector: 'epw-wallet-tab',
    moduleId: module.id,
    templateUrl: './wallet-tab.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class WalletTabComponent {
    public selectedIndex: Number = 0;
    subscription: Subscription[] = [];
    title: String = 'Wallet';



    public onLogout(): void {

    }
}
