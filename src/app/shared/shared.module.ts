import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { FooterComponent } from '../components/footer/footer.component';

const COMPONENTS = [
  FooterComponent,
  TopNavigationComponent
]

@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    NgbModule,
  
  ], 
  exports: COMPONENTS
  
})
export class SharedModule { }
