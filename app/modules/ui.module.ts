import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthorizationModule } from './authorization/authorization.module';
import { LoginComponent } from './authorization/containers/login/login.component';
import { RegisterComponent } from './authorization/containers/register/register-component';
import { HomeRegister } from './authorization/components/home-reister/home.register';
import { SharedModule } from './shared';
import { PilotModule } from './pilot/pilot.module';
import { ResturantModule } from './resturant/resturant.module';

import { HomeComponent } from './shared/home/home.component';
import { PilotProfileComponent } from './shared/pilot/pilot-profile/pilot-profile.component';
import { PilotDetailComponent } from './shared/resturant/pilot-details/pilot-detail.component';
import { PilotOrdersComponent } from './shared/pilot/pilot-orders/pilot-orders.component';
import { PilotMapComponent } from './shared/pilot/main-pilot-map/main-pilot-map.component';
import { ResturantMapComponent } from './shared/resturant/main-resturant-map/main-resturant-map.component';
import { NotifactionListComponent } from './shared/resturant/notifaction-list/notifaction-list.component';

export const pilotRoutes: Routes = [
  { path: 'pilot/home', component: PilotProfileComponent },
  { path: 'pilot/deliveries', component: PilotOrdersComponent },
  { path: 'pilot/wallet', component: PilotProfileComponent },
  { path: 'pilot/map', component: PilotMapComponent }
];

export const resturantRoutes: Routes = [
  { path: 'resturant/home', component: ResturantMapComponent },
  { path: 'resturant/pilots', component: PilotDetailComponent },
  { path: 'resturant/notifications', component: NotifactionListComponent },
  { path: 'resturant/map', component: ResturantMapComponent }
];

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: HomeRegister },
  { path: 'register/pilot', component: RegisterComponent },
  { path: 'register/resturant', component: RegisterComponent },
  { path: 'register', component: HomeRegister },
  { path: 'home', component: HomeComponent },

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
