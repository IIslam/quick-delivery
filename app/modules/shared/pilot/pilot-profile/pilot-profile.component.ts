import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';

import { PilotProxyService } from '../../../../proxy/services/pilot-proxy.service';
import * as dtos from '../../../../proxy/dtos';

@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: './pilot-profile.component.html',
    styleUrls: ['./pilot-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotProfileComponent implements OnInit {
    public pilotData: dtos.PilotProfile;
    public PilotId: any;  //this id belong to the pilot that logged in ...........
    constructor(private pilotService: PilotProxyService) { }
    ngOnInit() {
        this.pilotService.getPilotProfile().subscribe(res => {
            this.pilotData = res;
            this.PilotId = res.id;
        })
    }
}
