import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatchigrapheinPageRoutingModule } from './catchigraphein-routing.module';

import { CatchigrapheinPage } from './catchigraphein.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatchigrapheinPageRoutingModule
  ],
  declarations: [CatchigrapheinPage]
})
export class CatchigrapheinPageModule {}
