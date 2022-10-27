import {Component} from '@angular/core';
import {isDesktop, MenuItemModel} from "../../../app.component";
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
      link: ['', 'landing', 'characters']
    },
    {
      label: 'comics',
      link: ['', 'landing', 'comics']
    }
  ]
  public isDesktopRef = isDesktop;

  constructor(private router: Router,
              public userService: UserService) {
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

}
