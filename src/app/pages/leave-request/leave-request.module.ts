import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveRequestPageRoutingModule } from './leave-request-routing.module';

import { LeaveRequestPage } from './leave-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveRequestPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LeaveRequestPage]
})
export class LeaveRequestPageModule {}
