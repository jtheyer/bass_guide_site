import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BlogPageRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';
import { UserMenuModule } from '../user-menu/user-menu.module';
 
@NgModule({
  declarations: [
    BlogPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogPageRoutingModule,
    UserMenuModule
  ],
  exports: []
})

export class BlogPageModule {}
