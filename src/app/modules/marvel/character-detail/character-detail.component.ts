import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterModel} from "../../../shared/services/apis/characters.service";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  public character: CharacterModel = new CharacterModel();

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({character}) => {
      this.character = character;
    });
  }

}
