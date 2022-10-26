import {AfterViewInit, Component, HostListener} from '@angular/core';
import {ThemeService} from "./core/services/theme.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    AppComponent.calcIsDesktop(event);
  }
  public menuItems: MenuItemModel[] = [
    {
      label: 'charactersList',
      link: ['', 'landing', 'characters']
    }
  ]
  public isDesktopRef = isDesktop;

  constructor(public themeService: ThemeService,
              private router: Router) {
  }

  public ngAfterViewInit() {
    AppComponent.calcIsDesktop();
  }

  public get getSidenavMode() {
    if (isDesktop.value) {
      return 'side';
    }
    return 'over';
  }

  public sidenavItemClicked(item: MenuItemModel, sidenavRef: any) {
    this.router.navigate(item.link);
    if (!isDesktop.value) {
      sidenavRef.close();
    }
  }

  public isSidenavItemSelected(item: MenuItemModel) {
    return this.router.url === item.link.join('/');
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
