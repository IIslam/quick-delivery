import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'epw-notfication-list',
    moduleId: module.id,
    templateUrl: './notifaction-list.component.html',
    styleUrls: ['notifaction-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotifactionListComponent {
    public myArrayItem: Array<any> = [{
        text: "تم وصول الطيار حسين محمد الي المطعم",
    },
    {
        text: "تم وصول الطيار حسين محمد الي المطعم",
    },
    ];
}
