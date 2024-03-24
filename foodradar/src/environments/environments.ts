import  { initializeApp } from 'firebase/app';

export const environment = {
    production: false,
    projectId: "foodradar-2dd84", 
    appId: "1:109056342803:web:d4f14f781878da4aa578e6", 
    storageBucket: "foodradar-2dd84.appspot.com", 
    apiKey: "AIzaSyCPEr2J0j9F4jfTHWH-oWWn23IsfJnYw3M", 
    authDomain: "foodradar-2dd84.firebaseapp.com", 
    messagingSenderId: "109056342803"
};

const firebaseApp = initializeApp(environment);

export default firebaseApp;