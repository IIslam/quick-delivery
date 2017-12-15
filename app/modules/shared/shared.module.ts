
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule, NativeScriptRouterModule } from 'nativescript-angular';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Http, Response } from '@angular/http';

import { StateModule } from '../../state';

import { ValidationErrorsComponent } from './components/validation-errors/validation-errors.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';
import { SideDrawerPageComponent } from './side-drawer-page';
import { BorderlessBtnDirective } from './borderless-btn.directive';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PilotProfileComponent } from './pilot/pilot-profile/pilot-profile.component';


export class TranslateHttpLoader implements TranslateLoader {
  constructor(private http: Http, private prefix: string, private suffix: string) { }

  /**
   * Gets the translations from the server
   * @param lang
   * @returns {any}
   */
  public getTranslation(lang: string): any {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`).map(res => res.json());
  }
}

export function createHttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, '/i18n/', '.json');
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptRouterModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createHttpLoaderFactory),
        deps: [Http]
      }
    }),
    StateModule
  ],
  declarations: [
    ValidationErrorsComponent,

    SideDrawerPageComponent,
    BorderlessBtnDirective,
    LayoutPageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PilotProfileComponent
  ],
  exports: [
    ReactiveFormsModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    TranslateModule,
    StateModule,

    ValidationErrorsComponent,

    SideDrawerPageComponent,
    BorderlessBtnDirective
  ]
})
export class SharedModule {

}
