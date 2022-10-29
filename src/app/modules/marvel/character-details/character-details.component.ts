import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CharacterModel, CharactersService} from "../../../shared/services/apis/characters.service";
import {currentLang} from "../../../app.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  public character: CharacterModel;
  public currentLangRef = currentLang;
  public tabs: {
    availabilityKey: string,
    titleTranslateKey: string,
    icon: string,
    serviceFuncName: string,
    itemTitleKey: string
  }[] = [
    {
      availabilityKey: 'comics',
      titleTranslateKey: 'comics',
      icon: 'library_books',
      serviceFuncName: 'getCharacterComics',
      itemTitleKey: 'title'
    },
    {
      availabilityKey: 'series',
      titleTranslateKey: 'movies',
      icon: 'movie',
      serviceFuncName: 'getCharacterSeries',
      itemTitleKey: 'title'
    },
    {
      availabilityKey: 'stories',
      titleTranslateKey: 'stories',
      icon: 'book',
      serviceFuncName: 'getCharacterStories',
      itemTitleKey: 'title'
    },
    {
      availabilityKey: 'events',
      titleTranslateKey: 'events',
      icon: 'event',
      serviceFuncName: 'getCharacterEvents',
      itemTitleKey: 'title'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute,
              public charactersService: CharactersService,
              public $location: Location) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({character}) => {
      this.character = character;
    });
  }

  public capitalizeFirstLetter(str: string) {
    return str[0].toUpperCase() + str.substr(1);
  }

  public getTabAvailableItems(tab: any) {
    return (this.character as any)[tab.availabilityKey].available;
  }
}
