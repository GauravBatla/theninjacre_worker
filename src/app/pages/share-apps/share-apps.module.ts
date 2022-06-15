import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareAppsPageRoutingModule } from './share-apps-routing.module';

import { ShareAppsPage } from './share-apps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareAppsPageRoutingModule
  ],
  declarations: [ShareAppsPage]
})
export class ShareAppsPageModule {}
