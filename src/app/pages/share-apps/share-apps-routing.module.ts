import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareAppsPage } from './share-apps.page';

const routes: Routes = [
  {
    path: '',
    component: ShareAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareAppsPageRoutingModule {}
