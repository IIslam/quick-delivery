import { NgModule, ModuleWithProviders } from '@angular/core';
import { RequestOptions, Http } from '@angular/http';
import { CommonModule } from '@angular/common';

import { NativeScriptHttpModule } from 'nativescript-angular/http';

import { GlobalConfig, globalConfigInjectionToken } from './global-config';
import { CustomRequestOptions } from './custom-request-options';
import {
  AuthProxyService,
  TokenStoreService
} from './services/index';

export function customRequestOptionsFactory(globalConfig: GlobalConfig, tokenStore: TokenStoreService) {
  return new CustomRequestOptions(globalConfig, tokenStore);
}

// export function authProxyServiceFactory(config, http) {
//   return new AuthProxyService(config, http);
// }

@NgModule({
  imports: [
    CommonModule,
    NativeScriptHttpModule

  ],
  exports: []
})
export class ProxyModule {
  static forRoot(config: GlobalConfig): ModuleWithProviders {
    return {
      ngModule: ProxyModule,
      providers: [
        NativeScriptHttpModule,
        TokenStoreService,
        { provide: globalConfigInjectionToken, useValue: config },
        AuthProxyService,
        { provide: RequestOptions, useFactory: customRequestOptionsFactory, deps: [globalConfigInjectionToken, TokenStoreService] },
      ],
    };
  }
}
// --------------------------------------------------------------------
export * from './dtos/index';
export * from './models/index';
export * from './services/index';
