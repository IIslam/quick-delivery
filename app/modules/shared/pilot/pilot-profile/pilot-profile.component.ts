import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'profile',
    moduleId: module.id,
    templateUrl: './pilot-profile.component.html',
    styleUrls: ['./pilot-profile.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotProfileComponent {
    constructor() { }

}
