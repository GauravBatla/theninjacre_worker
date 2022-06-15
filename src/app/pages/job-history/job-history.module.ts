import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobHistoryPageRoutingModule } from './job-history-routing.module';

import { JobHistoryPage } from './job-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobHistoryPageRoutingModule
  ],
  declarations: [JobHistoryPage]
})
export class JobHistoryPageModule {}
