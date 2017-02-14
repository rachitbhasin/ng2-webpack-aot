import { NavBarComponent } from './components/nav/nav-bar.component';

import { HomePageComponent } from './components/home/home';
import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './components/home';
import { AppComponent } from './components/app';


const routes: Routes = [
  {path: 'home', component: HomePageComponent}
];

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    NavBarComponent,
    HomePageComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash: false}),
    HomeModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class AppModule {}
