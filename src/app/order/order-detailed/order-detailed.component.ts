import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-detailed',
  templateUrl: './order-detailed.component.html',
  styleUrls: ['./order-detailed.component.scss']
})
export class OrderDetailedComponent implements OnInit {

  isStarter: boolean = false; 
  isProffesional: boolean = false; 
  isPremium: boolean = false; 

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.router.url === '/order/starter' ? this.isStarter = true : false;
    this.router.url === '/order/premium' ? this.isPremium = true : false;
    this.router.url === '/order/professional' ? this.isProffesional = true : false;


  }
  

}
