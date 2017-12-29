import { Injectable } from '@angular/core';
import { Http, RequestMethod, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as dtos from '../dtos';
import * as models from '../models';
import { observe } from 'tns-core-modules/ui/gestures/gestures';

Injectable()
export class ResutrantProxyService {
    constructor(private http: Http) {
    }

    getResturant(): Observable<Array<any>> {
        return this.http.request('/api/Order/GetResturants',
            {
                method: RequestMethod.Get,
            })
            .map(s => s.json());
    }

    notifacationList(): Observable<Array<any>> {
        const headers = new Headers();
        return this.http.request('/api/Order/GetNotifactionList', {
            method: RequestMethod.Get,
        })
            .map(res => res.json());
    }
}
