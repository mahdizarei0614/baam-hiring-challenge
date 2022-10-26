import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {CoreModule} from "../../core/core.module";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        CoreModule,
        MatCardModule
    ]
})
export class AuthModule {
}
