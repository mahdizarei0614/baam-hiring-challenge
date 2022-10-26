import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-simple',
  templateUrl: './card-simple.component.html',
  styleUrls: ['./card-simple.component.scss']
})
export class CardSimpleComponent {
  @Input() public title: string = '';
  @Input() public subtitle: string = '';
  @Input() public img: string = '';
  @Input() public description: string = '';
  @Input() public descEllipsis: boolean = false;
  @Input() public largeImage: boolean = false;

  constructor() { }
}
