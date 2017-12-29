import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';

import { PilotProxyService } from '../../../../proxy/services/pilot-proxy.service';
import * as dtos from '../../../../proxy/dtos';

@Component({
    selector: 'pilot-wallet',
    moduleId: module.id,
    templateUrl: './pilot-wallet.component.html',
    styleUrls: ['./pilot-wallet.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotWalletComponent implements OnInit {
    public pilotData: dtos.PilotProfile;
    public PilotId: any;  //this id belong to the pilot that logged in ...........
    constructor(private pilotService: PilotProxyService) { }
    ngOnInit() {
        this.pilotService.getPilotProfile().subscribe(res => {
            this.pilotData = res;
            console.log(res);
        })
    }
}
