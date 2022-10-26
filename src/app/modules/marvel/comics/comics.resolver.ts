import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {catchError, map, Observable, throwError} from 'rxjs';
import {DataResponseModel} from "../../../shared/services/apis/characters.service";
import {ComicsService} from "../../../shared/services/apis/comics.service";

@Injectable({
  providedIn: 'root'
})
export class ComicsResolver implements Resolve<DataResponseModel> {
  constructor(private comicsService: ComicsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DataResponseModel> {
    return this.comicsService.get()
      .pipe(map((res) => {
          return res.data;
        }),
        catchError((error) => {
          return throwError(error);
        }));
  }
}
