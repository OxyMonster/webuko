import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webuko';

    isGeorgian: boolean = false; 

    constructor (
      private translate: TranslateService
    ) {

      translate.setDefaultLang('en'); 
   
      
    }

    ngOnInit(): void {
   
      
    }

     
  switchLanguage(language: string) {
    this.translate.use(language);
    this.toggleLanguage(); 
  }

  toggleLanguage() {
    this.isGeorgian === false ? this.isGeorgian = true : this.isGeorgian = false; 
    
  }
}
