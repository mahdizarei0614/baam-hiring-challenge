import {Component} from '@angular/core';
import {currentLang, isDesktop, MenuItemModel} from "../../../app.component";
import {Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {
  public menuItems: MenuItemModel[] = [
    {
      label: 'charactersList',
      link: ['', 'marvel', 'characters']
    },
    {
      label: 'comics',
      link: ['', 'marvel', 'comics']
    }
  ]
  public systemItems: MenuItemModel[] = [
    {
      label: 'changeTheme',
      link: ['', 'settings', 'change-theme']
    }
  ]
  public isDesktopRef = isDesktop;
  public currentLangRef = currentLang;

  constructor(private router: Router,
              public userService: UserService) {
  }

  public get getSidenavMode() {
    if (isDesktop.value) {
      return 'side';
    }
    return 'over';
  }

  public sidenavItemLink(item: MenuItemModel, sidenavRef: any) {
    this.router.navigate(item.link as string[]);
    if (!isDesktop.value) {
      sidenavRef.close();
    }
  }

  public sidenavItemAction(item: MenuItemModel, sidenavRef: any) {
    if (!isDesktop.value) {
      sidenavRef.close();
    }
    item.action();
  }

  public isSidenavItemSelected(item: MenuItemModel) {
    return this.router.url === (item.link as string[]).join('/');
  }

}
