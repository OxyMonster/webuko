import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingAboutUsComponent } from './landing-about-us/landing-about-us.component';
import { SliderComponent } from './slider/slider.component';


const COMPONENTS = [
    HomeComponent,
    LandingMainComponent,
    LandingAboutUsComponent,
    SliderComponent
]

@NgModule({
  declarations: [
    HomeComponent,
    LandingMainComponent,
    LandingAboutUsComponent,
    SliderComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: COMPONENTS

})
export class HomeModule { }
