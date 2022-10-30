import {Component, HostListener} from '@angular/core';
import {ThemeEnum, ThemeService} from "./core/services/theme.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    AppComponent.calcIsDesktop(event);
  }
  public currentLangRef = currentLang;

  constructor(public themeService: ThemeService) {
    AppComponent.calcIsDesktop();
    const favoriteTheme = localStorage.getItem('favoriteTheme') as string;
    let selectedTheme;
    if (favoriteTheme !== 'null') {
      selectedTheme = favoriteTheme;
    } else {
      selectedTheme = ThemeEnum.Marvel;
    }
    this.themeService.changeTheme(selectedTheme);
  }

  private static calcIsDesktop(event: any = null) {
    const innerWidth = event?.target?.innerWidth ? event?.target?.innerWidth : getWindow()?.innerWidth;
    isDesktop.next(typeof innerWidth !== 'undefined' && innerWidth >= 640);
  }
}

export function getWindow() {
  return typeof window !== 'undefined' ? window : undefined;
}

export type MenuItemModel = {
  label: string;
  link?: string[];
  icon?: string;
  action?: any;
}

export let isDesktop: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
export let currentLang: BehaviorSubject<string> = new BehaviorSubject<string>('en');
