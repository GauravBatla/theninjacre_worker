import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OppertunitiesPageRoutingModule } from './oppertunities-routing.module';

import { OppertunitiesPage } from './oppertunities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OppertunitiesPageRoutingModule
  ],
  declarations: [OppertunitiesPage]
})
export class OppertunitiesPageModule {}
