import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {

  }

  onNavigate() {
    this.router.navigateByUrl('order'); 
  }

  openModal() {
    // this,this.modalService.open(); 
  }

}
