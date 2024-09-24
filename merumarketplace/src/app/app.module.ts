import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat'; // Adjusted import
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { CommonModule } from '@angular/common';

import { environment } from '../envirornments/environment.pro';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { LandingComponent } from './Authentication/landing/landing.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';

import { DrinkspageComponent } from './pages/Drinks/drinkspage/drinkspage.component';
import { ProductPageComponent } from './pages/kitchen/kitchendescription/kitchendescription.component';




@NgModule({
  declarations: [
    LandingComponent,
    LoginComponent ,
    RegistrationComponent,
    ProductPageComponent,
    ProductspageComponent,
    DrinkspageComponent,

   



  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule // Ensure Firestore is imported if used
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
