import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChangeThemeComponent} from "./change-theme/change-theme.component";

const routes: Routes = [
  {
    path: 'change-theme',
    component: ChangeThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
