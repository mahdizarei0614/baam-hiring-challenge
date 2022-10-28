import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Input() public placeholder: string = '';
  @Output() public OnInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() public OnClear: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
