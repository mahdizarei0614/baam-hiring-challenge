import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ChangeThemeComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatRadioModule,
    FormsModule,
    TranslateModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class SettingsModule { }
