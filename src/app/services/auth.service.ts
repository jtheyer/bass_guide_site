// import { AngularFireAuth } from '@angular/fire/compat/auth';



// import { Injectable } from '@angular/core';
// import { GoogleAuthProvider, signOut, getAuth  } from 'firebase/auth';
// import { AngularFireAuth } from '@angular/fire/compat/auth';


// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   auth;
//   constructor(public afAuth: AngularFireAuth){// Inject Firebase auth service
//     this.auth = afAuth;
//   }

//   // Sign in with Google
//   GoogleAuth() {
//     return this.AuthLogin(new GoogleAuthProvider());
//   }
//   // Auth logic to run auth providers
//   AuthLogin(provider) {
//     return this.afAuth
//       .signInWithPopup(provider)
//       .then((result) => {
//         this.auth = getAuth()
//         console.log('You have been successfully logged in!');
//         console.log('user:', result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   googleSignOut(){
//   this.auth().signOut().then(() => {
//     console.log('signed out!');
//   }).catch((err)=>{
//     console.log('Google sign out error: ' + err);
//   });
// }



//   // logoutGoogle() { 
//   //   signOut(this.auth).then((res) => {
//   //   // Sign-out successful.
//   //     console.log('signed out!')
//   //     console.log(res)
//   //       }).catch((error) => {
//   //         // An error happened.
//   //         console.log(error);
//   //   });
//   // }

// }
