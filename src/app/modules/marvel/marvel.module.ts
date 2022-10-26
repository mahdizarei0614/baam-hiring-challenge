import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarvelRoutingModule} from './marvel-routing.module';
import {CharactersComponent} from './characters/characters.component';


@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    MarvelRoutingModule
  ]
})
export class MarvelModule {
}
