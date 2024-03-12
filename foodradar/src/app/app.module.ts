import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"foodradar-2dd84","appId":"1:109056342803:web:d4f14f781878da4aa578e6","storageBucket":"foodradar-2dd84.appspot.com","apiKey":"AIzaSyCPEr2J0j9F4jfTHWH-oWWn23IsfJnYw3M","authDomain":"foodradar-2dd84.firebaseapp.com","messagingSenderId":"109056342803"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
