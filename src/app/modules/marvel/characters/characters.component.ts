import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterModel, CharactersService} from "../../../shared/services/apis/characters.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit, OnDestroy {
  public characters: CharacterModel[] = [];
  public subscription = Subscription.EMPTY;
  public searchbarValue = '';
  private searchTimeout: any;

  constructor(private activatedRoute: ActivatedRoute,
              private charactersService: CharactersService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({characters}) => {
      this.characters = characters.results;
    });
  }

  public getNextList(offset = 0, limit = 10, name: string = '') {
    this.charactersService.get(offset, limit, (name.length ? name : null) as string).subscribe((res) => {
      if (offset === 0) {
        this.characters = res.data.results as CharacterModel[];
      } else {
        this.characters = [...this.characters, ...res.data.results as CharacterModel[]];
      }
    });
  }

  public inputSearchbar() {
    try {
      clearTimeout(this.searchTimeout);
    } catch (e) {}
    this.searchTimeout = setTimeout(() => {
      this.getNextList(0, 10, this.searchbarValue);
    }, 500);
  }

  public hideSearchbar() {
    if (this.searchbarValue?.length) {
      this.getNextList(0, 10)
    }
    this.searchbarValue = '';
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
