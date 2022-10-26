import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) {
  }

  get(offset = 0, limit = 10): Observable<GetCharactersResponseModel> {
    return this.http.get<GetCharactersResponseModel>('characters', {
      params: {
        offset,
        limit
      }
    });
  }
}

export class GetCharactersResponseModel {
  public data: GetCharactersDataResponseModel = new GetCharactersDataResponseModel();
}

export class GetCharactersDataResponseModel {
  public count: number = 0;
  public limit: number = 0;
  public offset: number = 0;
  public results: CharacterModel[] = [];
  public total: number = 0;
}

export class CharacterModel {
  public id: number = 0;
  public name: string = '';
  public description: string = '';
  public modified: Date = new Date();
  public resourceURI: string = '';
  public urls: {type: string, url: string}[] = [];
  public thumbnail: {path: string, extension: string} = {path: '', extension: ''};
  public comics: any[] = [];
  public stories: any[] = [];
  public events: any[] = [];
  public series: any[] = [];
}
