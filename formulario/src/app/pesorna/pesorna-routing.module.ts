import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesornaPage } from './pesorna.page';

const routes: Routes = [
  {
    path: '',
    component: PesornaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesornaPageRoutingModule {}
