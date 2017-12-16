import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';

import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'epw-pilot-detail',
    moduleId: module.id,
    templateUrl: './pilot-detail.component.html',
    styleUrls: ['pilot-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotDetailComponent {
    public myArrayItem: Array<any> = [{
        name: "John",
        phone: 123456

    }, {
        name: "John",
        phone: 123456
    }, {
        name: "John",
        phone: 123456
    }
    ];
}