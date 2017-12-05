import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthorizationModule } from './authorization/authorization.module';
import { LoginComponent } from './authorization/containers/login/login.component';
import { RegisterComponent } from './authorization/containers/register/register-component';

import { SharedModule } from './shared';
import { ManagementModule, managementRoutes } from './management/management.module';
import { PilotModule, pilotRoutes } from './pilot/pilot.module';
import { ResturantModule, resturantRoutes } from './resturant/resturant.module';

export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  ...managementRoutes,
  ...pilotRoutes,
  ...resturantRoutes
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes),
    SharedModule,
    AuthorizationModule,
    ManagementModule,
    PilotModule,
    ResturantModule
  ],
  exports: [NativeScriptRouterModule]
})
export class UIModule {

}
