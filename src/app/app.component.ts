import {Component, HostListener} from '@angular/core';
import {ThemeService} from "./core/services/theme.service";
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

  constructor(public themeService: ThemeService) {
    AppComponent.calcIsDesktop();
  }

  private static calcIsDesktop(event: any = null) {
    const innerWidth = event?.target?.innerWidth ? event?.target?.innerWidth : getWindow()?.innerWidth;
    isDesktop.next(typeof innerWidth !== 'undefined' && innerWidth > 768);
  }
}

export function getWindow() {
  return typeof window !== 'undefined' ? window : null;
}

export type MenuItemModel = {
  label: string;
  link: string[];
}

export let isDesktop: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
