import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap'; 
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalComponent } from '../components/modal/modal.component';
import { HomeModule } from '../home/home.module';
import { ContactModule } from '../contact/contact.module';



const COMPONENTS = [
  // FooterComponent,
  // TopNavigationComponent,
  // ModalComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    CommonModule, 
    NgbModule, 
    RouterModule,
   
  
  ], 
  exports: [ COMPONENTS, TranslateModule ]
})
export class SharedModule { }
