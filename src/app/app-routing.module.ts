import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HarborPage } from './harbor/harbor.page';
//Note* Order matters
const routes: Routes = [
  {
    path: '',
    redirectTo: '/harbor',
    pathMatch: 'full'
  },
  {
    path: 'harbor', 
    component: HarborPage
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
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
export class AppRoutingModule {}
