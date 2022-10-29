import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, map, Observable, throwError} from 'rxjs';
import {ComicModel, ComicsService} from "../../../shared/services/apis/comics.service";

@Injectable({
  providedIn: 'root'
})
export class ComicDetailsResolver implements Resolve<ComicModel> {
  constructor(private comicsService: ComicsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ComicModel> {
    return this.comicsService.getById(route.params['id'])
      .pipe(map((res) => {
          return res.data.results[0] as ComicModel;
        }),
        catchError((error) => {
          return throwError(error);
        }));
  }
}
