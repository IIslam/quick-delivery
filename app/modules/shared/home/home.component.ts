import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  text: string = 'Home Page';
}
