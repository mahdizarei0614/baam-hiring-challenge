import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {currentLang} from "../../app.component";

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule]
})
export class I18nModule {
  constructor(translate: TranslateService) {
    const preferredLang = localStorage.getItem('lang');
    translate.addLangs(['en', 'fa']);
    const browserLang = translate.getBrowserLang();
    if (preferredLang) {
      translate.use(preferredLang);
      currentLang.next(preferredLang);
    } else if (browserLang) {
      translate.use(browserLang.match(/en|fa/) ? browserLang : 'en');
      localStorage.setItem('lang', translate.currentLang);
    }
  }
}

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
