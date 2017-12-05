import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'epw-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(translateService: TranslateService) {
    // translateService.setDefaultLang('ar');
    translateService.use('en');
  }
}
