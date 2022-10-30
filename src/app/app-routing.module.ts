import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SiteLayoutComponent} from "./core/components/site-layout/site-layout.component";
import {AuthGuard} from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'marvel',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'marvel',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        canLoad: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./modules/marvel/marvel.module').then((m) => m.MarvelModule)
      }
    ]
  },
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: 'settings',
        canLoad: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./modules/settings/settings.module').then((m) => m.SettingsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
