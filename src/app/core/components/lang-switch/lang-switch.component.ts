import {Component} from '@angular/core';
import {LangChangeEvent, TranslateService} from "@ngx-translate/core";
import {currentLang, isDesktop} from "../../../app.component";

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss']
})
export class LangSwitchComponent {
  public isDesktopRef = isDesktop;

  constructor(public translate: TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      currentLang.next(event.lang);
      localStorage.setItem('lang', event.lang);
    });
  }

  public getLangTitle(lang: string) {
    switch (lang) {
      case 'fa':
        return 'فارسی';
      case 'en':
        return 'English';
      default:
        return 'English'
    }
  }
}
