import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterModel} from "../../../shared/services/apis/characters.service";
import {currentLang} from "../../../app.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public character: CharacterModel;
  public currentLangRef = currentLang;

  constructor(private activatedRoute: ActivatedRoute,
              public $location: Location) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({character}) => {
      this.character = character;
    });
  }

}
