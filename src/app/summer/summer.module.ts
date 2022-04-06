import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SummerPageRoutingModule } from './summer-routing.module';

import { SummerPage } from './summer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummerPageRoutingModule
  ],
  declarations: [SummerPage]
})
export class SummerPageModule {}
