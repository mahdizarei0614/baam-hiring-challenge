import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, map, Observable, throwError} from 'rxjs';
import {
  CharactersService,
  GetCharactersDataResponseModel
} from "../../../shared/services/apis/characters.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<GetCharactersDataResponseModel> {
  constructor(private charactersService: CharactersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetCharactersDataResponseModel> {
    return this.charactersService.get()
      .pipe(map((res) => {
          return res.data;
        }),
        catchError((error) => {
          return throwError(error);
        }));
  }
}
