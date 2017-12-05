import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'about',
  moduleId: module.id,
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  text: string = 'About Page';
}
