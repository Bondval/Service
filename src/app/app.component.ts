import { Component,Input, ViewEncapsulation } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss'],
  // rtl ? ['rtl.css'] : ['grid-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
