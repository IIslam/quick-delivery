import { Injectable } from '@angular/core';
import { Http, RequestMethod, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import * as dtos from '../dtos';
import * as models from '../models';
import { observe } from 'tns-core-modules/ui/gestures/gestures';


Injectable()
export class PilotProxyService {
    constructor(private http: Http) {
    }
    getpilots(): Observable<Array<any>> {
        return this.http.request('/api/Order/GetPilotList',
            {
                method: RequestMethod.Get,
            })
            .map(s => s.json());
    }

    requestPilot(pilotId): Observable<string> {
        let search = new URLSearchParams();
        search.append('pilotId', pilotId.toString());
        const headers = new Headers();
        headers.append('content-Type', 'application/json');
        return this.http.request('/api/Order/RequestPilot', {
            method: RequestMethod.Post,
            search: search
        })
            .map(res => res.json());
    }


}