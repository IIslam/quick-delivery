import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestMethod } from '@angular/http';
import { NSHttp } from 'nativescript-angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as models from '../models';
import * as dtos from '../dtos';
import { GlobalConfig, globalConfigInjectionToken } from '../global-config';

@Injectable()
export class AuthProxyService {
  constructor(
    @Inject(globalConfigInjectionToken) private globalConfig: GlobalConfig,
    private http: Http) {
  }

  getTokenFromCredentials(model: models.MembershipCredentialsModel): Observable<dtos.TokenDto> {
    const data = `email=${model.email}&password=${model.password}&grant_type=password`;
    const headers = new Headers();
    headers.append('content-Type', 'application/x-www-form-urlencoded');
    return this.http.request('/api/auth/login/getToken', {
      method: RequestMethod.Post,
      body: data,
      headers: headers
    }).map(s => {
      return s.json()
    });
  }

  getUserType(model: models.MembershipCredentialsModel): Observable<dtos.UserType> {
    console.log(model.email);
    console.log(model.password);
    return this.http.request(`/api/user/checkuserstatus?email=${model.email}&password=${model.password}`, {
      method: RequestMethod.Get,
    }).map(s => {
      return s.json()
    });
  }

}


