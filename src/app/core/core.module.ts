import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nModule} from "./modules/i18n.module";
import {LangSwitchComponent} from "./components/lang-switch/lang-switch.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LangSwitchComponent,
    NavbarComponent
  ],
  exports: [
    LangSwitchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class CoreModule {
}
