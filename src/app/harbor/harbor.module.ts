import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HarborPageRoutingModule } from './harbor-routing.module';
import { HarborPage } from './harbor.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HarborPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarborPageRoutingModule,
    SwiperModule
  ],
  
})
export class HarborPageModule {}
