import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isSubmited: boolean = false; 

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {

  }

  onSubmit() {
    this.isSubmited = true; 
    return false;
  }

}
