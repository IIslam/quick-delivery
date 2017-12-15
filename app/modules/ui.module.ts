import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthorizationModule } from './authorization/authorization.module';
import { LoginComponent } from './authorization/containers/login/login.component';
import { RegisterComponent } from './authorization/containers/register/register-component';

import { SharedModule } from './shared';
import { PilotModule } from './pilot/pilot.module';
import { ResturantModule, resturantRoutes } from './resturant/resturant.module';
import { HomeComponent } from './shared/home/home.component';
import { PilotProfileComponent } from './shared/pilot/pilot-profile/pilot-profile.component';


export const pilotRoutes: Routes = [
  // {
  //     // path: 'pilot', component: PilotProfileComponent,
  //     // canActivate: [AuthrizationGuardService],
  //     // canActivateChild: [AuthrizationGuardService],
  //     // children: [
  //     //     // { path: '', redirectTo: '/home/', pathMatch: 'full' },
  //     //     // { path: 'home', component: WalletTransferComponent, outlet: 'paymentoutlet' },
  //     // ]
  // }
];
export const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pilot/home', component: PilotProfileComponent },
  ...pilotRoutes,
  ...resturantRoutes
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes),
    SharedModule,
    AuthorizationModule,
    PilotModule,
    ResturantModule
  ],
  exports: [NativeScriptRouterModule]
})
export class UIModule {

}
