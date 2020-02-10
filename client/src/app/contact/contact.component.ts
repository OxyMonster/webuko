import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from './contact.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  contactForm: FormGroup
  isSubmited: boolean = false; 

  constructor(
    private fb: FormBuilder, 
    private contactService: ContactService
  ) {
      this.contactForm = fb.group({
        name: [ '', Validators.required ],
        email: [ '', Validators.required ], 
        phone: [ '', Validators.required ], 
        message: ['', Validators.required]
      })

   }

  ngOnInit() {

  
  }

  onSubmit(form: FormGroup) {

    this.contactService
        .submitContact(form.value)
        .subscribe(data => {
          console.log(data);
          this.isSubmited = true; 
          
        }, err => {
          console.log(err);
          
        })
    
  }; 





  ngOnDestroy(): void {
    
    // this.test().unsubscribe(); 
  }

}
