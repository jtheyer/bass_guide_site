import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [/*are to make directives (including components and pipes) 
    from the current module available to other directives in the current module. 
    Selectors of directives, components or pipes are only matched against 
    the HTML if they are declared or imported.  */
    AppComponent,
  ],
  entryComponents: [],

  imports: [/*makes the exported declarations of other 
    modules available in the current module. */
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{/*are to make services and values known to DI (dependency injection).
     They are added to the root scope and they are injected to other 
     services or directives that have them as dependency. */
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
