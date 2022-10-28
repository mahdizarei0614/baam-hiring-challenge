import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardSimpleComponent} from "./components/card-simple/card-simple.component";
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from './pipes/date.pipe';
import { NoResultComponent } from './components/no-result/no-result.component';
import {TranslateModule} from "@ngx-translate/core";
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [CardSimpleComponent, DatePipe, NoResultComponent, SearchbarComponent, ToolbarComponent],
  exports: [
    CardSimpleComponent,
    DatePipe,
    NoResultComponent,
    SearchbarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class SharedModule {
}
