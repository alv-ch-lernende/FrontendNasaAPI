import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuchButtonComponent } from './component/notAPage/such-button/such-button.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MarsImageDownComponent } from './component/notAPage/mars-image-down/mars-image-down.component';
import {NgOptimizedImage} from "@angular/common";
import { FutterComponent } from './component/notAPage/futter/futter.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { HeaderComponent } from './component/notAPage/header/header.component';
import { FilterBoxComponent } from './component/notAPage/filter-box/filter-box.component';
import { ImageBoxComponent } from './component/notAPage/image-box/image-box.component';
import { NavbarComponent } from './component/notAPage/navbar/navbar.component';
import { ImageServiceComponent } from './component/service/müll/image-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SuchButtonComponent,
    LandingPageComponent,
    MarsImageDownComponent,
    FutterComponent,
    SearchPageComponent,
    HeaderComponent,
    FilterBoxComponent,
    ImageBoxComponent,
    NavbarComponent,
    ImageServiceComponent
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
