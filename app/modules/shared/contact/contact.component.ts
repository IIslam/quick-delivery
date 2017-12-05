import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'contact',
    moduleId: module.id,
    templateUrl: './contact.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
    text: string = 'Contact Page';
}
