import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthorizationModule } from './authorization/authorization.module';
import { LoginComponent } from './authorization/containers/login/login.component';
import { RegisterComponent } from './authorization/containers/register/register-component';
import { ResturantRegisterComponent } from './authorization/containers/resturant-register/resturant-register-component';
import { HomeRegister } from './authorization/components/home-reister/home.register';
import { SharedModule } from './shared';
// import { PilotModule } from './pilot/pilot.module';
// import { ResturantModule } from './resturant/resturant.module';
// Pilot Components
import { HomeComponent } from './shared/home/home.component';
import { PilotProfileComponent } from './shared/pilot/pilot-profile/pilot-profile.component';
import { PilotOrdersComponent } from './shared/pilot/pilot-orders/pilot-orders.component';
import { PilotMapComponent } from './shared/pilot/main-pilot-map/main-pilot-map.component';
import { PilotWalletComponent } from './shared/pilot/pilot-wallet/pilot-wallet.component';
//Resturant Components
import { PilotDetailComponent } from './shared/resturant/pilot-details/pilot-detail.component';
import { ResturantMapComponent } from './shared/resturant/main-resturant-map/main-resturant-map.component';
import { NotifactionListComponent } from './shared/resturant/notifaction-list/notifaction-list.component';
//Global Components
import { ContactComponent } from './shared/contact/contact.component';
import { AuthrizationGuardService } from './authorization/services/auth-guard.service';

export const pilotRoutes: Routes = [
  // {
  //   path: 'pilot', component: PilotDetailComponent,
  //   canActivate: [AuthrizationGuardService],
  //   canActivateChild: [AuthrizationGuardService],
  //   children: [
  //     { path: '', redirectTo: '/pilot/home', pathMatch: 'full' },
  { path: 'pilot/home', component: PilotProfileComponent },
  { path: 'pilot/deliveries', component: PilotOrdersComponent },
  { path: 'pilot/profile', component: PilotProfileComponent },
  { path: 'pilot/map', component: PilotMapComponent },
  { path: 'pilot/wallet', component: PilotWalletComponent }
  //   ]
  // }
];

export const resturantRoutes: Routes = [
  // {
  // path: 'resturant', component: PilotDetailComponent,
  // canActivate: [AuthrizationGuardService],
  // canActivateChild: [AuthrizationGuardService],
  // children: [
  //   { path: '', redirectTo: 'resturant/home', pathMatch: 'full' },
  { path: 'resturant/home', component: ResturantMapComponent },
  { path: 'resturant/pilots', component: PilotDetailComponent },
  { path: 'resturant/notifications', component: NotifactionListComponent },
  { path: 'resturant/map', component: ResturantMapComponent }
  //   ]
  // }
];

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: HomeRegister },
  { path: 'register/pilot', component: RegisterComponent },
  { path: 'register/resturant', component: ResturantRegisterComponent },
  { path: 'register', component: HomeRegister },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  ...pilotRoutes,
  ...resturantRoutes
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot(routes),
    SharedModule,
    AuthorizationModule,
    // PilotModule,
    // ResturantModule
  ],
  exports: [NativeScriptRouterModule]
})
export class UIModule {

}
