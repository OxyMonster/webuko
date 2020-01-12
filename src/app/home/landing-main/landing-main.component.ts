import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landing-main',
  templateUrl: './landing-main.component.html',
  styleUrls: ['./landing-main.component.scss']
})
export class LandingMainComponent implements OnInit {

   isGeorgian: boolean = false; 

  constructor(
    private router : Router,
    private translate : TranslateService
  ) { }

  ngOnInit() {

    console.log(this.translate.currentLang);
    // this.toggleLanguage();
  }

  ngDoCheck(): void {
    this.toggleLanguage();
  }



  onNavigate() {
    this.router.navigateByUrl('/services'); 
  };

  toggleLanguage() {
    this.translate.currentLang === 'en' ? this.isGeorgian = false : this.isGeorgian = true; 
    console.log("changed");
    
  }

 

}
