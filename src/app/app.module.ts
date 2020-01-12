import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { OurServicesModule } from './our-services/our-services.module';
import { ContactModule } from './contact/contact.module';
import { OrderComponent } from './order/order.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingMainComponent } from './home/landing-main/landing-main.component';
import { LandingAboutUsComponent } from './home/landing-about-us/landing-about-us.component';
import { SliderComponent } from './home/slider/slider.component';
import { ContactComponent } from './contact/contact.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    BeforeFooterComponent,
    OrderComponent,
    AboutUsComponent,
    NotfoundComponent,
    TopNavigationComponent,
    FooterComponent,
    HomeComponent,
    LandingMainComponent,
    LandingAboutUsComponent,
    SliderComponent,
    ContactComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  
    // HomeModule,
    OurServicesModule,
    ContactModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
