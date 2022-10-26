import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarvelRoutingModule} from './marvel-routing.module';
import {CharactersComponent} from './characters/characters.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CharactersComponent
  ],
    imports: [
        CommonModule,
        MarvelRoutingModule,
        MatCardModule
    ]
})
export class MarvelModule {
}
