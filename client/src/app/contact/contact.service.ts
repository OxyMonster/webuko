import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  URL: string = 'http://localhost:3000/contact'; 

  constructor(
    private http: HttpClient
  ) { 

  }

  submitContact(contactForm: {}) {
    return this.http.post(this.URL, contactForm); 
  }
}
