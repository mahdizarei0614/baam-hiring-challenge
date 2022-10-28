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

  get(offset = 0, limit = 10, nameStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    const params: any = {
      offset,
      limit
    }
    if (nameStartsWith?.length) {
      params.nameStartsWith = nameStartsWith
    }
    if (additionalQueryParams) {
      Object.entries(additionalQueryParams).forEach(([key, value]) => {
        params[key] = value;
      });
    }
    return this.http.get<RequestResponseModel>('characters', {
      params
    });
  }

  getById(characterId: number): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`characters/${characterId}`);
  }

  getCharacterComics(offset = 0, limit = 10, nameStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    const params: any = {
      offset,
      limit
    }
    if (nameStartsWith?.length) {
      params.nameStartsWith = nameStartsWith
    }
    if (additionalQueryParams) {
      Object.entries(additionalQueryParams).forEach(([key, value]) => {
        if (key !== 'characterId') {
          params[key] = value;
        }
      });
    }
    return this.http.get<RequestResponseModel>(`characters/${additionalQueryParams.characterId}/comics`, {
      params
    });
  }

  getCharacterSeries(offset = 0, limit = 10, nameStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    const params: any = {
      offset,
      limit
    }
    if (nameStartsWith?.length) {
      params.nameStartsWith = nameStartsWith
    }
    if (additionalQueryParams) {
      Object.entries(additionalQueryParams).forEach(([key, value]) => {
        if (key !== 'characterId') {
          params[key] = value;
        }
      });
    }
    return this.http.get<RequestResponseModel>(`characters/${additionalQueryParams.characterId}/series`, {
      params
    });
  }

  getCharacterStories(offset = 0, limit = 10, nameStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    const params: any = {
      offset,
      limit
    }
    if (nameStartsWith?.length) {
      params.nameStartsWith = nameStartsWith
    }
    if (additionalQueryParams) {
      Object.entries(additionalQueryParams).forEach(([key, value]) => {
        if (key !== 'characterId') {
          params[key] = value;
        }
      });
    }
    return this.http.get<RequestResponseModel>(`characters/${additionalQueryParams.characterId}/stories`, {
      params
    });
  }

  getCharacterEvents(offset = 0, limit = 10, nameStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    const params: any = {
      offset,
      limit
    }
    if (nameStartsWith?.length) {
      params.nameStartsWith = nameStartsWith
    }
    if (additionalQueryParams) {
      Object.entries(additionalQueryParams).forEach(([key, value]) => {
        if (key !== 'characterId') {
          params[key] = value;
        }
      });
    }
    return this.http.get<RequestResponseModel>(`characters/${additionalQueryParams.characterId}/events`, {
      params
    });
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
  comics: {
    available: number,
    items: { resourceURI: string, name: string }[]
  };
  stories: any;
  events: any;
  series: {
    available: number,
    items: { resourceURI: string, name: string }[]
  };
}
