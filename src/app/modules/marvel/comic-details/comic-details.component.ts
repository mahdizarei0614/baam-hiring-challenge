import {Component, OnInit} from '@angular/core';
import {ComicModel, ComicsService} from "../../../shared/services/apis/comics.service";
import {currentLang} from "../../../app.component";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-comic-details',
  templateUrl: './comic-details.component.html',
  styleUrls: ['./comic-details.component.scss']
})
export class ComicDetailsComponent implements OnInit {
  public comic: ComicModel;
  public currentLangRef = currentLang;
  public tabs: {
    availabilityKey: string,
    titleTranslateKey: string,
    icon: string,
    serviceFuncName: string,
    itemTitleKey: string
  }[] = [
    {
      availabilityKey: 'creators',
      titleTranslateKey: 'creators',
      icon: 'flare',
      serviceFuncName: 'getComicsCreators',
      itemTitleKey: 'fullName'
    },
    {
      availabilityKey: 'characters',
      titleTranslateKey: 'charactersList',
      icon: 'people',
      serviceFuncName: 'getComicsCharacters',
      itemTitleKey: 'name'
    },
    {
      availabilityKey: 'stories',
      titleTranslateKey: 'stories',
      icon: 'book',
      serviceFuncName: 'getComicsStories',
      itemTitleKey: 'title'
    },
    {
      availabilityKey: 'events',
      titleTranslateKey: 'events',
      icon: 'event',
      serviceFuncName: 'getComicsEvents',
      itemTitleKey: 'title'
    }
  ];

  constructor(private activatedRoute: ActivatedRoute,
              public comicsService: ComicsService,
              public $location: Location) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({comic}) => {
      this.comic = comic;
    });
  }

  public capitalizeFirstLetter(str: string) {
    return str[0].toUpperCase() + str.substr(1);
  }

  public getTabAvailableItems(tab: any) {
    return (this.comic as any)[tab.availabilityKey].available;
  }
}
