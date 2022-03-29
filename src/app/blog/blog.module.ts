import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BlogPageRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { UserMenuPopover } from '../user-menu/user-menu-popover';
 
@NgModule({
  declarations: [
    BlogPage,
    UserMenuPopover
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule
  ]
  
})
export class BlogPageModule {}
