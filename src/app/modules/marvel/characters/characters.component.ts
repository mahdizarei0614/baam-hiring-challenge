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
              public charactersService: CharactersService) {
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.data.subscribe(({characters}) => {
      this.characters = characters.results;
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
