import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { UIModule } from './modules/ui.module';
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    NativeScriptModule,
    UIModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
