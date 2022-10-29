import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from "./characters/characters.component";
import {CharactersResolver} from "./characters/characters.resolver";
import {CharacterDetailsComponent} from "./character-details/character-details.component";
import {CharacterDetailsResolver} from "./character-details/character-details.resolver";
import {ComicsComponent} from "./comics/comics.component";
import {ComicsResolver} from "./comics/comics.resolver";
import {ComicDetailsComponent} from "./comic-details/comic-details.component";
import {ComicDetailsResolver} from "./comic-details/comic-details.resolver";

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
    path: 'comics',
    component: ComicsComponent,
    resolve: {
      comics: ComicsResolver
    }
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent,
    resolve: {
      character: CharacterDetailsResolver
    }
  },
  {
    path: 'comics/:id',
    component: ComicDetailsComponent,
    resolve: {
      comic: ComicDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule {
}
