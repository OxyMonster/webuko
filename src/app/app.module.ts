import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { BeforeFooterComponent } from './components/before-footer/before-footer.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurServicesModule } from './our-services/our-services.module';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { OrderComponent } from './order/order.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BeforeFooterComponent,
    OrderComponent,
    AboutUsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule, 
    HomeModule,
    OurServicesModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
