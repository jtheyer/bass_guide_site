import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SummerPage } from './summer.page';

const routes: Routes = [
  {
    path: '',
    component: SummerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummerPageRoutingModule {}
