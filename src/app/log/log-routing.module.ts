import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogPage } from './log.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/log/catchigraphein',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LogPage,
    children: [
      {
        path: 'catchigraphein',
        loadChildren: () => import('../catchigraphein/catchigraphein.module').then( m => m.CatchigrapheinPageModule)
      },
      {
        path: 'spring',
        loadChildren: () => import('../spring/spring.module').then(m => m.SpringPageModule),
      },
      {
        path: 'summer',
        loadChildren: () => import('../summer/summer.module').then(m => m.SummerPageModule)
      },
      {
        path: 'fall',
        loadChildren: () => import('../fall/fall.module').then(m => m.FallPageModule)
      },
      {
        path: 'transitions',
        loadChildren: () => import('../transitions/transitions.module').then(m => m.TransitionsPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogPageRoutingModule {}
