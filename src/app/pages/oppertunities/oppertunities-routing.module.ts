import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OppertunitiesPage } from './oppertunities.page';

const routes: Routes = [
  {
    path: '',
    component: OppertunitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OppertunitiesPageRoutingModule {}
