import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, map, Observable, throwError} from 'rxjs';
import {
  CharacterModel,
  CharactersService
} from "../../../shared/services/apis/characters.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailResolver implements Resolve<CharacterModel> {
  constructor(private charactersService: CharactersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CharacterModel> {
    return this.charactersService.getById(route.params['id'])
      .pipe(map((res) => {
          return res.data.results[0] as CharacterModel;
        }),
        catchError((error) => {
          return throwError(error);
        }));
  }
}
