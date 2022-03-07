import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarborPage } from './harbor.page';

const routes: Routes = [
  {
    path: '',
    component: HarborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarborPageRoutingModule {}
