import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat'; // Adjusted import
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../envirornments/environment.pro';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Authentication/login/login.component';
import { LandingComponent } from './Authentication/landing/landing.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { MenshoespageComponent } from './pages/Men shoes/menshoespage/menshoespage.component';
import { MenshoesdescriptionpageComponent } from './pages/Men shoes/menshoesdescriptionpage/menshoesdescriptionpage.component';
import { DrinkspageComponent } from './pages/Drinks/drinkspage/drinkspage.component';
import { DrinksdescriptionpageComponent } from './pages/Drinks/drinksdescriptionpage/drinksdescriptionpage.component';
import { ElectronicspageComponent } from './pages/Electronics/electronicspage/electronicspage.component';
import { ElectronicsdescriptionComponent } from './pages/Electronics/electronicsdescription/electronicsdescription.component';
import { FurnituredescriptionComponent } from './pages/Furniture/furnituredescription/furnituredescription.component';
import { SecondhanddescriptionComponent } from './pages/SecondHand/secondhanddescription/secondhanddescription.component';
import { SecondhandpageComponent } from './pages/SecondHand/secondhandpage/secondhandpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    RegistrationComponent,
    ProductspageComponent,
    MenshoespageComponent,
    MenshoesdescriptionpageComponent,
    DrinkspageComponent,
    DrinksdescriptionpageComponent,
    ElectronicspageComponent,
    ElectronicsdescriptionComponent,
    FurnituredescriptionComponent,
    SecondhanddescriptionComponent,
    SecondhandpageComponent
  ],
  imports: [
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
