import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {getWindow} from "../../app.component";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public isDarkTheme: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
    const storageDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
    if (!storageDarkTheme) {
      this.isDarkTheme.next(false);
    }
    this.isDarkTheme.asObservable().subscribe((res) => {
      const favoriteTheme = localStorage.getItem('favoriteTheme')
      if (res) {
        localStorage.setItem('isDarkTheme', 'true');
        this.changeTheme(favoriteTheme as string);
      } else {
        localStorage.setItem('isDarkTheme', 'false');
        this.changeTheme(favoriteTheme as string);
      }
    });
  }

  changeTheme(key: string) {
    localStorage.setItem('favoriteTheme', key);
    const isLight = localStorage.getItem('isDarkTheme') !== 'true';
    getWindow()?.document.getElementById('theme-link-element')
      ?.setAttribute('href', `assets/theme/${key}${isLight ? '-light' : ''}-theme.css`);
  }
}

export enum ThemeEnum {
  Marvel = 'marvel',
  CaptainAmerica = 'captain',
  SpiderMan = 'spider',
  IronMan = 'iron',
  BlackPanther = 'panther',
  Hulk = 'hulk'
}
