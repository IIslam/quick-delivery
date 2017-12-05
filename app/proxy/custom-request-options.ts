import { BaseRequestOptions, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

import { TokenStoreService } from './services/token-store';
import { GlobalConfig } from './global-config';

export class CustomRequestOptions extends BaseRequestOptions {
    constructor(private globalConfig: GlobalConfig, private tokenStore: TokenStoreService) {
        super();
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        if (!options.url.startsWith('./')) {
            options.url = this.globalConfig.baseUrl + options.url;
        }
        options.headers = options.headers || new Headers();
        if (this.tokenStore.getToken()) {
            options.headers.append('Authorization', 'bearer ' + this.tokenStore.getToken());
        }
        options.headers.append('X-LANG', this.globalConfig.language);
        options.headers.append('CLIENT', this.globalConfig.client_id);
        return super.merge(options);
    }
}
