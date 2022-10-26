import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {CharactersResolver} from "./characters/characters.resolver";
import {CharacterDetailComponent} from "./character-detail/character-detail.component";
import {CharacterDetailResolver} from "./character-detail/character-detail.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent,
    resolve: {
      characters: CharactersResolver
    }
  },
  {
    path: 'characters/:id',
    component: CharacterDetailComponent,
    resolve: {
      character: CharacterDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule {
}
