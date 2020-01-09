import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingAboutUsComponent } from './landing-about-us/landing-about-us.component';


const COMPONENTS = [
  HomeComponent

]

@NgModule({
  declarations: [
    HomeComponent,
    LandingMainComponent,
    LandingAboutUsComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: COMPONENTS

})
export class HomeModule { }
