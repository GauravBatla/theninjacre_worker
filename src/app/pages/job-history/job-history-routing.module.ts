import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobHistoryPage } from './job-history.page';

const routes: Routes = [
  {
    path: '',
    component: JobHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobHistoryPageRoutingModule {}
