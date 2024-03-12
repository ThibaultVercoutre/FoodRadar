import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"foodradar-2dd84","appId":"1:109056342803:web:d4f14f781878da4aa578e6","storageBucket":"foodradar-2dd84.appspot.com","apiKey":"AIzaSyCPEr2J0j9F4jfTHWH-oWWn23IsfJnYw3M","authDomain":"foodradar-2dd84.firebaseapp.com","messagingSenderId":"109056342803"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
