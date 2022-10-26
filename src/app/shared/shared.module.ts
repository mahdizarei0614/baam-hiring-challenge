import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardSimpleComponent} from "./components/card-simple/card-simple.component";
import {MatCardModule} from "@angular/material/card";
import { DatePipe } from './pipes/date.pipe';


@NgModule({
  declarations: [CardSimpleComponent, DatePipe],
    exports: [
        CardSimpleComponent,
        DatePipe
    ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SharedModule {
}
