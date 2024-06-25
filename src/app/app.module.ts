import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { HumanResourcesModule } from './human-resources/human-resources.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HumanResourcesModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
