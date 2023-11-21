import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuchButtonComponent } from './component/such-button/such-button.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MarsImageDownComponent } from './component/mars-image-down/mars-image-down.component';
import {NgOptimizedImage} from "@angular/common";
import { FutterComponent } from './component/futter/futter.component';
import { SearchPageComponent } from './component/search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SuchButtonComponent,
    LandingPageComponent,
    MarsImageDownComponent,
    FutterComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
