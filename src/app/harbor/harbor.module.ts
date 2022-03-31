import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HarborPageRoutingModule } from './harbor-routing.module';
import { HarborPage } from './harbor.page';
import { UserMenuModule } from '../user-menu/user-menu.module';

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
    SwiperModule,
    UserMenuModule
  ],
  exports: [ ]
})

export class HarborPageModule {}
