import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatchigrapheinPage } from './catchigraphein.page';

const routes: Routes = [
  {
    path: '',
    component: CatchigrapheinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatchigrapheinPageRoutingModule {}
