import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//Note* Order matters
const routes: Routes = [
  {
    path: 'log',
    loadChildren: () => import('./log/log.module').then(m => m.LogPageModule)
  },
  {
    path: '',
    redirectTo: '/harbor',
    pathMatch: 'full'
  },
  {
    path: 'harbor',
    loadChildren: () => import('./harbor/harbor.module').then(m => m.HarborPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'log',
    redirectTo: '/catchigraphein',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/harbor',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
