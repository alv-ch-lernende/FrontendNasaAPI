import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "./component/landing-page/landing-page.component";
import {SearchPageComponent} from "./component/search-page/search-page.component";

const routes: Routes = [

  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: '**',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
