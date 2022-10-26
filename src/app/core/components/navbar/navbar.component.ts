import {Component, Input} from '@angular/core';
import {isDesktop} from "../../../app.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() public sidenavRef: any = null;
  public isDesktopRef = isDesktop;

  constructor() {
  }
}
