import {Component, OnInit} from '@angular/core';
import {ThemeEnum, ThemeService} from "../../../core/services/theme.service";
import {currentLang} from "../../../app.component";
import {Location} from "@angular/common";

@Component({
  selector: 'app-change-theme',
  templateUrl: './change-theme.component.html',
  styleUrls: ['./change-theme.component.scss']
})
export class ChangeThemeComponent implements OnInit {
  public currentLangRef = currentLang;
  public selectedTheme: string;
  public themes: IThemeModel[] = [
    {
      themeKey: ThemeEnum.Marvel,
      icon: 'assets/icons/core/marvel-logo.svg',
      translateKey: 'marvel'
    },
    {
      themeKey: ThemeEnum.IronMan,
      icon: 'assets/icons/shared/captain-america.svg',
      translateKey: 'ironMan'
    },
    {
      themeKey: ThemeEnum.CaptainAmerica,
      icon: 'assets/icons/shared/captain-america.svg',
      translateKey: 'captainAmerica'
    },
    {
      themeKey: ThemeEnum.Hulk,
      icon: 'assets/icons/shared/captain-america.svg',
      translateKey: 'hulk'
    },
    {
      themeKey: ThemeEnum.SpiderMan,
      icon: 'assets/icons/shared/captain-america.svg',
      translateKey: 'spiderMan'
    },
    {
      themeKey: ThemeEnum.BlackPanther,
      icon: 'assets/icons/shared/captain-america.svg',
      translateKey: 'blackPanther'
    }
  ]

  constructor(private themeService: ThemeService,
              public $location: Location) {
  }

  ngOnInit() {
    this.selectedTheme = localStorage.getItem('favoriteTheme') || ThemeEnum.Marvel;
  }

  changeTheme(themeKey: string) {
    this.themeService.changeTheme(themeKey);
  }
}

export interface IThemeModel {
  themeKey: string;
  icon: string;
  translateKey: string;
}
