import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallPage } from './fall.page';

const routes: Routes = [
  {
    path: '',
    component: FallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallPageRoutingModule {}
