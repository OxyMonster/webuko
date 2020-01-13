import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  isHome: boolean = false; 

  constructor(
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.router.url === '/home' ? this.isHome = true : this.isHome = false; 
    console.log(this.router.url);
    console.log(this.isHome);
    
    
  }

  onNavigate() {
    this.router.navigateByUrl('order'); 
  }

  openModal() {
    // this,this.modalService.open(); 
  }

}
