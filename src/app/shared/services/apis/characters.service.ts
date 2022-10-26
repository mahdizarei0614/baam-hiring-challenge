import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ComicModel} from "./comics.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  get(offset = 0, limit = 10): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>('characters', {
      params: {
        offset,
        limit
      }
    });
  }

  getById(characterId: number): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`characters/${characterId}`);
  }

  getCharacterComics(characterId: number): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`characters/${characterId}/comics`);
  }
}

export type RequestResponseModel = {
  data: DataResponseModel;
}

export type DataResponseModel = {
  count: number;
  limit: number;
  offset: number;
  results: CharacterModel[] | ComicModel[];
  total: number;
}

export type CharacterModel = {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: { type: string, url: string }[];
  thumbnail: { path: string, extension: string };
  comics: { resourceURI: string, name: string }[];
  stories: any[];
  events: any[];
  series: any[];
}
