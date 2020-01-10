import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'services', component: OurServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'order', component: OrderComponent},
  // { path: '/about-us', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
