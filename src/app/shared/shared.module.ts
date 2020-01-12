import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalComponent } from '../components/modal/modal.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
const COMPONENTS = [
  FooterComponent,
  TopNavigationComponent,
  ModalComponent
]

@NgModule({
  declarations: [
    TopNavigationComponent,
    FooterComponent,
    ModalComponent
  ],
  imports: [
    CommonModule, 
    NgbModule, 
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
    // AppRoutingModule
  
  ], 
  exports: COMPONENTS
  
})
export class SharedModule { }
