import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptFormsModule } from 'nativescript-angular';
import { NativeScriptRouterModule } from 'nativescript-angular';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { StateModule } from '../../state/state.module';
import { AuthrizationGuardService } from '../authorization/services/auth-guard.service';
import { WalletTabComponent } from './containers/wallet-tab/wallet-tab.component';
import { TransactionTypePipe } from './pipes/transaction-type.pipe';
import { transactionSortByDatePipe } from './pipes/transactions-sort.pipe';

export const managementRoutes: Routes = [
    {
        path: 'managment', component: WalletTabComponent,
        canActivate: [AuthrizationGuardService],
        canActivateChild: [AuthrizationGuardService],
        children: [
            { path: '', redirectTo: '/home/', pathMatch: 'full' },
            // { path: 'cashin', component: WalletTransferComponent, outlet: 'cashinoutlet' },
            // { path: 'payment', component: WalletTransferComponent, outlet: 'paymentoutlet' },
        ]
    }
]

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        StateModule
    ],
    exports: [],
    declarations: [
        TransactionTypePipe,
        transactionSortByDatePipe,
        WalletTabComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ManagementModule { }
