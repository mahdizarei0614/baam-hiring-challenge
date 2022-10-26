import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarvelRoutingModule} from './marvel-routing.module';
import {CharactersComponent} from './characters/characters.component';
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    MatCardModule,
    SharedModule,
    TranslateModule,
    MatToolbarModule
  ]
})
export class MarvelModule {
}
