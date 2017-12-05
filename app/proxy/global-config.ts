import { InjectionToken } from '@angular/core';

export const globalConfigInjectionToken = new InjectionToken<GlobalConfig>('itsc-epw-sdk.globalconfig');

export interface GlobalConfig {

    language: string;
    client_id: string;
    baseUrl: string;

}
