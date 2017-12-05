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
    const data = `grant_type=password&username=${model.username}&password=${model.password}&client_id=${this.globalConfig.client_id}&client_secret=p@$$w0rd`;
    const headers = new Headers();
    headers.append('content-Type', 'application/x-www-form-urlencoded');
    return this.http.request('/token', {
      method: RequestMethod.Post,
      body: data,
      headers: headers
    }).map(s => {
      return s.json()
    });

  }

  getTokenFromRegister(model: models.RegisterationModel): Observable<dtos.TokenDto> {
    const data = `grant_type=register&fullname=${model.fullname}&password=${model.password}&mobile=${model.mobile}&identification=${model.identification}&client_id=${this.globalConfig.client_id}&client_secret=p@$$w0rd`;
    const headers = new Headers();
    console.log(data);
    headers.append('content-Type', 'application/x-www-form-urlencoded');
    return this.http.request('/token', {
      method: RequestMethod.Post,
      body: data,
      headers: headers
    }).map(s => s.json());

  }

  // getTokenFromActivate(model: models.ActivateUserModel): Observable<dtos.TokenDto> {
  //   const data = `grant_type=activate&mobile=${model.mobileNumber}&pin=${model.pin}&client_id=${this.globalConfig.client_id}&client_secret=p@$$w0rd`;
  //   const headers = new Headers();
  //   headers.append('content-Type', 'application/x-www-form-urlencoded');
  //   return this.http.request('/token', {
  //     method: RequestMethod.Post,
  //     body: data,
  //     headers: headers
  //   }).map(s => s.json());

  // }
}
