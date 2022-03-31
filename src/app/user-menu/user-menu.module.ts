import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserMenuPopover } from '../user-menu/user-menu-popover';
import { UserMenuComponent } from './user-menu.component';
 
@NgModule({
  declarations: [
    UserMenuPopover,
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    UserMenuPopover,
    UserMenuComponent
  ]
})

export class UserMenuModule {}