import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FallPageRoutingModule } from './fall-routing.module';

import { FallPage } from './fall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FallPageRoutingModule
  ],
  declarations: [FallPage]
})
export class FallPageModule {}
