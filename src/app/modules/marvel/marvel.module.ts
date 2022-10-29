import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarvelRoutingModule} from './marvel-routing.module';
import {CharactersComponent} from './characters/characters.component';
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../../shared/shared.module";
import {TranslateModule} from "@ngx-translate/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CharacterDetailsComponent} from './character-details/character-details.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {ComicsComponent} from './comics/comics.component';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatChipsModule} from "@angular/material/chips";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ComicDetailsComponent} from './comic-details/comic-details.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent,
    ComicsComponent,
    ComicDetailsComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule,
    MatCardModule,
    SharedModule,
    TranslateModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    InfiniteScrollModule,
    MatInputModule,
    FormsModule,
    MatChipsModule,
    MatTooltipModule
  ]
})
export class MarvelModule {
}
