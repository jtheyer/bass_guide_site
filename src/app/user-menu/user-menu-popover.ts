import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { UserMenuComponent } from './user-menu.component'
/*
* Display this within an <ion-buttons> tag.
* -- Display the button here in this template. 
* -- Pull in the list from template made in UserMenuComponent 
* -- Use a popoverController wherever popover would need to be dismissed
* -- ...or any other popover commands need to be used. I.e. user-menu.component.ts 
*/
@Component({
  selector: 'user-menu',
template: `
<ion-button class="account-btn" (click)="openMenu($event)"> 
  <ion-icon slot="icon-only" name="person-outline"></ion-icon>
</ion-button>
`,
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuPopover {
  constructor(public popoverController: PopoverController) {}

  async openMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: UserMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}