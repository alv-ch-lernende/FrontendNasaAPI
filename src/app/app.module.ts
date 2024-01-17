
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuchButtonComponent } from './component/notAPage/such-button/such-button.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { MarsImageDownComponent } from './component/notAPage/mars-image-down/mars-image-down.component';
import { FutterComponent } from './component/notAPage/futter/futter.component';
import { SearchPageComponent } from './component/search-page/search-page.component';
import { FilterBoxComponent } from './component/notAPage/filter-box/filter-box.component';
import { ImageBoxComponent } from './component/notAPage/image-box/image-box.component';
import { NavbarComponent } from './component/notAPage/navbar/navbar.component';
import { SortierungComponent } from './component/notAPage/sortierung/sortierung.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ModalWindowImageComponent } from './component/notAPage/modal-window-image/modal-window-image.component';

@NgModule({
  declarations: [
    AppComponent,
    SuchButtonComponent,
    LandingPageComponent,
    MarsImageDownComponent,
    FutterComponent,
    SearchPageComponent,
    FilterBoxComponent,
    ImageBoxComponent,
    NavbarComponent,
    SortierungComponent,
    ModalWindowImageComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgOptimizedImage,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
