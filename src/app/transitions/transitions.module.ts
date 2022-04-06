import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransitionsPageRoutingModule } from './transitions-routing.module';

import { TransitionsPage } from './transitions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransitionsPageRoutingModule
  ],
  declarations: [TransitionsPage]
})
export class TransitionsPageModule {}
