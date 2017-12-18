import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'pilot-orders',
    moduleId: module.id,
    templateUrl: './pilot-orders.component.html',
    styleUrls: ['./pilot-orders.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotOrdersComponent {
    public myArrayItem: Array<any> = [{
        name: "العمده",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "ارابياتا",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    },
    {
        name: "بابا جونسون",
        phone: 123456,
        ordetdate: 10,
        distsnce: 5
    }
    ];


}
