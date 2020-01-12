import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    // SharedModule
  ],
  exports: [
    // ContactComponent
  ]
})
export class ContactModule { }
