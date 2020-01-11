import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  onNavigate() {
    this.router.navigateByUrl('/contact');
  }

}
