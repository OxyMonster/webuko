import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {

   

  constructor(
    private router: Router
  ) { }

  ngOnInit() {


  }

  onNavigate() {
    this.router.navigateByUrl('/services'); 
  }

  

}
