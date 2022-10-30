import {Component} from '@angular/core';
import {currentLang, isDesktop, MenuItemModel} from "../../../app.component";
import {Router} from "@angular/router";
import {UserService} from "../../../shared/services/user.service";
import {AuthService} from "../../services/auth.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

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
    },
    {
      label: 'logout',
      icon: 'logout',
      action: () => {
        this.openDialog();
      }
    }
  ]
  public isDesktopRef = isDesktop;
  public currentLangRef = currentLang;

  constructor(private router: Router,
              public userService: UserService,
              private dialog: MatDialog) {
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
    if (item.action) {
      return false;
    }
    return this.router.url === (item.link as string[]).join('/');
  }

  private openDialog(): void {
    this.dialog.open(LogoutDialogComponent);
  }
}

@Component({
  selector: 'app-logout-dialog',
  templateUrl: 'logout-modal.template.html',
})
export class LogoutDialogComponent {
  constructor(public dialogRef: MatDialogRef<LogoutDialogComponent>,
              private authService: AuthService) {
  }

  confirmLogout() {
    this.authService.logout();
  }
}
