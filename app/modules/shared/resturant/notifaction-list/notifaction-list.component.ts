import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular';
import { ResutrantProxyService } from '../../../../proxy/services/resturant-service';

@Component({
    selector: 'epw-notfication-list',
    moduleId: module.id,
    templateUrl: './notifaction-list.component.html',
    styleUrls: ['notifaction-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class NotifactionListComponent implements OnInit {
    public myArrayItem: Array<any>;

    constructor(private resturantProxyService: ResutrantProxyService) {
    }
    //  = [
    //     {
    //         text: 'تم وصول الطيار حسين محمد الي المطعم'
    //     },
    //     {
    //         text: 'تم وصول الطيار حسين محمد الي المطعم',
    //     },
    // ];

    ngOnInit(): void {
        this.resturantProxyService.notifacationList().subscribe(
            (res) => {
                this.myArrayItem = res;
            }
        )
    }


}
