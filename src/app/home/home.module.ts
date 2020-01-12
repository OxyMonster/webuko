import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LandingMainComponent } from './landing-main/landing-main.component';
import { LandingAboutUsComponent } from './landing-about-us/landing-about-us.component';
import { SliderComponent } from './slider/slider.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ModalComponent } from '../components/modal/modal.component';
import { SharedModule } from '../shared/shared.module';

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }

const COMPONENTS = [
    // HomeComponent,
    // LandingMainComponent,
    // LandingAboutUsComponent,
    // SliderComponent
]

@NgModule({
  declarations: [
    // HomeComponent,
    // LandingMainComponent,
    // LandingAboutUsComponent,
    // SliderComponent,
    
  ],
  imports: [
    CommonModule,
    // SharedModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })
  ], 
  exports: COMPONENTS

})
export class HomeModule { }
