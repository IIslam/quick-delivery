import { Injectable } from '@angular/core';
import { Http, RequestMethod, RequestOptions, Response, URLSearchParams, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import * as dtos from '../dtos';
import * as models from '../models';
import { observe } from 'tns-core-modules/ui/gestures/gestures';


Injectable()
export class PilotProxyService {
    constructor(private _http: Http) {
    }

    getpilots(): Observable<Array<any>> {
        return this._http.request('/api/Order/GetPilotList', { method: RequestMethod.Get })
            .map(s => s.json());
    }

    requestPilot(pilotId): Observable<any> {
        // let search = new URLSearchParams();
        // search.append('pilotId', pilotId.toString());
        // const headers = new Headers();
        // headers.append('content-Type', 'application/json');
        // return this.http.request('/api/Order/RequestPilot', {
        //     method: RequestMethod.Post,
        //     search: search
        // })
        //  .map(res => res.json());
        const body = JSON.stringify(pilotId);
        const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post('/api/Order/RequestPilot', body, options)
            .map(res => res.json());
    }
    //get all orders made by specific pilot.
    //Ahmed working 
    getPilotOrderList(): Observable<Array<any>> {
        const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const options = new RequestOptions({ headers: headers });
        return this._http.get('/api/Order/GetPilotOrder', options)
            .map(res => res.json());
    }

    //done 
    getPilotProfile(): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const options = new RequestOptions({ headers: headers });
        return this._http.get('/api/user/getuserdata', options)
            .map(PilotProfileResult => PilotProfileResult.json());
    }

    //working
    getPilotDetails(PilotId): Observable<Array<any>> {
        const body = JSON.stringify(PilotId);
        const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        const options = new RequestOptions({ headers: headers });
        return this._http.post('/api/Order/', body, options)
            .map(res => res.json());
    }
}
