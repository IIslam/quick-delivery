import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

import { RouterExtensions } from 'nativescript-angular';
import { PilotProxyService } from '../../../../proxy/services/pilot-proxy.service';

@Component({
    selector: 'epw-pilot-detail',
    moduleId: module.id,
    templateUrl: './pilot-detail.component.html',
    styleUrls: ['pilot-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotDetailComponent implements OnInit {
    public myArrayItem: Array<any>;
    public pilotId: any;
    // = [{
    //     name: "John",
    //     phone: 123456

    // }, {
    //     name: "John",
    //     phone: 123456
    // }, {
    //     name: "John",
    //     phone: 123456
    // }
    // ];
    constructor(private pilotService: PilotProxyService) {
    }
    ngOnInit(): void {
       this.pilotService.getPilotDetails(this.pilotId).subscribe(res => {
         this.myArrayItem = res;
         console.log(res);
       });
    }

}