import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {I18nModule} from "./modules/i18n.module";
import {LangSwitchComponent} from "./components/lang-switch/lang-switch.component";
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {ThemeSwitchComponent} from './components/theme-switch/theme-switch.component';
import {ThemeService} from "./services/theme.service";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@NgModule({
  declarations: [
    LangSwitchComponent,
    NavbarComponent,
    ThemeSwitchComponent
  ],
  exports: [
    LangSwitchComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    I18nModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule
  ],
  providers: [
    ThemeService
  ]
})
export class CoreModule {
}
