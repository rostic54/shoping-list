import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Firebase libs
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";

const firebaseConfig = {
  apiKey: "AIzaSyBuAJGu-rCgAMD2cs3D99YaL6zT21bZgwM",
  authDomain: "groceries-cart-4fec4.firebaseapp.com",
  projectId: "groceries-cart-4fec4",
  storageBucket: "groceries-cart-4fec4.appspot.com",
  messagingSenderId: "998306977939",
  appId: "1:998306977939:web:7a2c82a8ab828e05485566",
  measurementId: "G-RN872RZMKL"
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

    // Initialize firebase
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
