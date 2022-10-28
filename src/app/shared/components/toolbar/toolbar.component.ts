import {Component, EventEmitter, Input, Output} from '@angular/core';
import {isDesktop} from "../../../app.component";
import {Animations} from "../../configs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  animations: [Animations.inOutAnimation]
})
export class ToolbarComponent {
  @Input() public toolbarTitleKey: string = '';
  @Input() public hasSearchbar: boolean = false;
  @Output() public OnSearchbarInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() public OnSearchbarClear: EventEmitter<any> = new EventEmitter<any>();
  public showSearchbar = false;
  public isDesktopRef = isDesktop;

  constructor() {}
}
