import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';
import { PilotProxyService } from '../../../../proxy/services/pilot-proxy.service';

@Component({
    selector: 'pilot-orders',
    moduleId: module.id,
    templateUrl: './pilot-orders.component.html',
    styleUrls: ['./pilot-orders.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotOrdersComponent implements OnInit {
     public myArrayItem: Array<any>;
     public PilotId: any; 
    constructor(private pilotSevice: PilotProxyService) {

    }
    ngOnInit(): void {
       this.pilotSevice.getPilotOrderList(this.PilotId).subscribe(res => {
          this.myArrayItem = res;
          console.log(res);
       });
    }
    //     name: "العمده",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "ارابياتا",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // },
    // {
    //     name: "بابا جونسون",
    //     phone: 123456,
    //     ordetdate: 10,
    //     distsnce: 5
    // }
    // ];


}
