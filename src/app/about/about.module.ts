import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { UserMenuPopover } from '../user-menu/user-menu-popover';

@NgModule({
  declarations: [
    AboutPage,
    UserMenuPopover
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule,
  ]
})
export class AboutPageModule {}
