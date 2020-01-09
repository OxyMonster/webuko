import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';


@NgModule({
  declarations: [
    TopNavigationComponent
  ],
  imports: [
    CommonModule, 
    NgbModule,
  
  ], 
  exports: [
    TopNavigationComponent
  ]
})
export class SharedModule { }
