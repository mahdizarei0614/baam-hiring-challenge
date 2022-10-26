import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardSimpleComponent} from "./components/card-simple/card-simple.component";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [CardSimpleComponent],
  exports: [
    CardSimpleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class SharedModule {
}
