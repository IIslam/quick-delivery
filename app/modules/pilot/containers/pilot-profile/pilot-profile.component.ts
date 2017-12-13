import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { StackLayout } from 'ui/layouts/stack-layout';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'epw-pilot-profile',
    moduleId: module.id,
    templateUrl: './pilot-profile.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PilotProfileComponent {
    constructor() { }

}
