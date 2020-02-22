import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PracticeFormsModule} from "./forms/practice-forms.module";
/*Adding the BrowserAnimationsModule in angular 9 is causing the issue. looks like some ivy issue.
* usually this module will be automatically imported using angular material library install*/
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PracticeFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

// since this is the appmodule kind of main module no need of exports. all the feature modules needs
// to be imported here and we should not reference those components again here
