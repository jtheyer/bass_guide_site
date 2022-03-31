import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'user-menu-content',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {

  constructor(
    public fireAuth: AngularFireAuth,
    public popoverController: PopoverController
  ) { }


  ngOnInit() { }

  loginGoogle() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((success) => {
        console.log(success.user);
        console.log(success);
        console.log('Successful login!');
        this.popoverController.dismiss();
      })
      .catch((err) => console.log(err));
  }

  logoutGoogle() {
    this.fireAuth.signOut()
      .then((success) => {
        console.log('...signed out!')
        this.popoverController.dismiss()
      })
      .catch((err) => console.log(err))
  }

}
