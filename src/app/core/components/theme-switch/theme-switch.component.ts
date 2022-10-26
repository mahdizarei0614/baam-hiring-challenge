import {Component} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {isDesktop} from "../../../app.component";

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {
  public isDesktopRef = isDesktop;

  constructor(public themeService: ThemeService) {
  }
}
