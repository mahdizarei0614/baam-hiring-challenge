import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardSimpleComponent} from "./components/card-simple/card-simple.component";
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from './pipes/date.pipe';
import { NoResultComponent } from './components/no-result/no-result.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [CardSimpleComponent, DatePipe, NoResultComponent],
    exports: [
        CardSimpleComponent,
        DatePipe,
        NoResultComponent
    ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule
  ]
})
export class SharedModule {
}
