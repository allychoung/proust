import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { Proj1Component } from './proj1/proj1.component';
import { CitedComponent } from './cited/cited.component';
import { Proj2Component } from './proj2/proj2.component';
import { StatementComponent } from './statement/statement.component';
import { Proj3Component } from './proj3/proj3.component';
import { Proj4Component } from './proj4/proj4.component';
import { Proj5Component } from './proj5/proj5.component';
import { Proj6Component } from './proj6/proj6.component';
import { Proj7Component } from './proj7/proj7.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Proj1Component,
    CitedComponent,
    Proj2Component,
    StatementComponent,
    Proj3Component,
    Proj4Component,
    Proj5Component,
    Proj6Component,
    Proj7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
