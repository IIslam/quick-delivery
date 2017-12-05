
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, Store, INITIAL_STATE, _INITIAL_STATE, INITIAL_REDUCER, Dispatcher } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as ApplicationSettings from 'application-settings';

import { TokenStoreService, ProxyModule } from '../proxy';
import { reducer } from './reducer';
import { initialState, State } from './state';
import { environment } from '../environments/environment';

import { AuthorizationStateService } from './auth/state.service';
import { AuthorizationEffectsService } from './auth/effects';

// workaround for dynamic initial state .... PR has been submited but not merged to ngrx/store yet.
export function customInitialStateFactory(initState, reducerInstance, tokenStoreService: TokenStoreService) {
  if (!initState) {
    return reducerInstance(undefined, { type: Dispatcher.INIT });
  }

  if (typeof initState === 'function') {
    return initState(tokenStoreService);
  }

  return initState;
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore(reducer, initialState),

    EffectsModule.run(AuthorizationEffectsService),
    EffectsModule,
    ProxyModule.forRoot(environment)
  ],
  providers: [
    AuthorizationStateService,
    {
      provide: INITIAL_STATE,
      useFactory: customInitialStateFactory,
      deps: [
        _INITIAL_STATE,
        INITIAL_REDUCER,
        TokenStoreService
      ]
    }
  ]
})

export class StateModule {
  constructor(store: Store<State>) {
    store.subscribe(state => {
      ApplicationSettings.setString('$$STATE', JSON.stringify(state));
      console.log('subscribed state------------saved');
    });
  }
}
