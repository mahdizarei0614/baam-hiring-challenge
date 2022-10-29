import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements AfterViewInit {
  @Input() public placeholder: string = '';
  @Output() public OnInput: EventEmitter<any> = new EventEmitter<any>();
  @Output() public OnClear: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('input') input: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    this.input.nativeElement.focus();
  }
}
