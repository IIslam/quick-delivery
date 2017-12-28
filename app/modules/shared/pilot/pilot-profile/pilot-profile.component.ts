import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';
import { PilotProxyService } from '../../../../proxy/services/pilot-proxy.service';
@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: './pilot-profile.component.html',
    styleUrls: ['./pilot-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotProfileComponent implements OnInit {
      public myArrayItem: Array<any>;
      public PilotId: any;  //this id belong to the pilot that logged in ...........
      constructor(private pilotService: PilotProxyService) { }
      ngOnInit() {
         this.pilotService.getPilotProfile(this.PilotId).subscribe(res => {
             this.myArrayItem = res;
             console.log(res);
         })
      }
}
