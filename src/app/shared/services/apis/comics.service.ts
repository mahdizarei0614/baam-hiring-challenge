import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RequestResponseModel} from "./characters.service";

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  constructor(private http: HttpClient) {
  }

  get(offset = 0, limit = 10, titleStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>('comics', {
      params: this.defaultPrepareParams(offset, limit, titleStartsWith, additionalQueryParams)
    });
  }

  getById(comicId: number): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`comics/${comicId}`);
  }

  getComicsCreators(offset = 0, limit = 10, titleStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`comics/${additionalQueryParams.comicId}/creators`, {
      params: this.defaultPrepareParams(offset, limit, titleStartsWith, additionalQueryParams)
    });
  }

  getComicsCharacters(offset = 0, limit = 10, titleStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`comics/${additionalQueryParams.comicId}/characters`, {
      params: this.defaultPrepareParams(offset, limit, titleStartsWith, additionalQueryParams)
    });
  }

  getComicsStories(offset = 0, limit = 10, titleStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`comics/${additionalQueryParams.comicId}/stories`, {
      params: this.defaultPrepareParams(offset, limit, titleStartsWith, additionalQueryParams)
    });
  }

  getComicsEvents(offset = 0, limit = 10, titleStartsWith: string = '', additionalQueryParams: any = null): Observable<RequestResponseModel> {
    return this.http.get<RequestResponseModel>(`comics/${additionalQueryParams.comicId}/events`, {
      params: this.defaultPrepareParams(offset, limit, titleStartsWith, additionalQueryParams)
    });
  }

  private defaultPrepareParams(offset: number, limit: number, titleStartsWith: string, additionalQueryParams: any) {
    const params: any = {
      offset,
      limit
    }
    if (titleStartsWith?.length) {
      params.titleStartsWith = titleStartsWith
    }
    if (additionalQueryParams) {
      Object.entries(additionalQueryParams).forEach(([key, value]) => {
        if (key !== 'comicId') {
          params[key] = value;
        }
      });
    }
    return params;
  }
}

export type ComicModel = {
  id: number,
  digitalId: number,
  title: string,
  issueNumber: number,
  variantDescription: string,
  description: string,
  modified: Date,
  isbn: string,
  upc: string,
  diamondCode: string,
  ean: string,
  issn: string,
  format: string,
  pageCount: number,
  textObjects: {
    type: string,
    language: string,
    text: string
  }[],
  resourceURI: string,
  urls: {
    type: string,
    url: string
  }[],
  series: {
    resourceURI: string,
    name: string
  },
  variants: {
    resourceURI: string,
    name: string
  }[],
  collections: {
    resourceURI: string,
    name: string
  }[],
  collectedIssues: {
    resourceURI: string,
    name: string
  }[],
  dates: {
    type: string,
    date: Date
  }[],
  prices: {
    type: string,
    price: number
  }[],
  thumbnail: {
    path: string,
    extension: string
  },
  images: {
    path: string,
    extension: string
  }[];
  creators: {
    available: number,
    returned: number,
    collectionURI: string,
    items: {
      resourceURI: string,
      name: string,
      role: string
    }[]
  },
  characters: {
    available: number,
    returned: number,
    collectionURI: string,
    items:
      {
        resourceURI: string,
        name: string,
        role: string
      }[]
  },
  stories: {
    available: number,
    returned: number,
    collectionURI: string,
    items: {
      resourceURI: string,
      name: string,
      type: string
    }[]
  },
  events: {
    available: number,
    returned: number,
    collectionURI: string,
    items: {
      resourceURI: string,
      name: string
    }[]
  }
}
