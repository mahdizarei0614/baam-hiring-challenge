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

  constructor(private activatedRoute: ActivatedRoute,
              private charactersService: CharactersService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({characters}) => {
      this.characters = characters.results;
    });
  }

  public getNextList() {
    this.charactersService.get(this.characters.length, 10).subscribe((res) => {
      this.characters = [...this.characters, ...res.data.results as CharacterModel[]];
    });
  }
  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
