import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { UserMenuModule } from '../user-menu/user-menu.module';

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
    UserMenuModule
  ],
  exports: []
})
export class AboutPageModule {}