import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  get(offset = 0, limit = 10) {
    return this.http.get('characters', {
      params: {
        offset,
        limit
      }
    })
  }
}
