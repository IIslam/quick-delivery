import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared';
import { AuthrizationGuardService } from './services/auth-guard.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterationForm } from './components/registration-form/registeration-form';
import { RegisterComponent } from './containers/register/register-component';

import { MinLengthDirective, IsMobileDirective } from './Directives/input-directives';

@NgModule({
    imports: [
        NativeScriptModule,
        SharedModule,
    ],
    exports: [],
    declarations: [
        LoginComponent,
        LoginFormComponent,
        RegisterComponent,
        RegisterationForm,
        IsMobileDirective,
        MinLengthDirective

    ],
    providers: [
        AuthrizationGuardService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthorizationModule { }
