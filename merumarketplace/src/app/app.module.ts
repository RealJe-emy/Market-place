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
import { PhotographerspageComponent } from './pages/photoshoot/photographerspage/photographerspage.component';
import { RentalspageComponent } from './pages/rentals/rentalspage/rentalspage.component';
import { MenshoesComponent } from './pages/shoes/men/menshoes/menshoes.component';
import { MenshoedescriptionComponent } from './pages/shoes/men/menshoedescription/menshoedescription.component';
import { WomenshoesComponent } from './pages/shoes/women/womenshoes/womenshoes.component';
import { WomenshoesdescriptionComponent } from './pages/shoes/women/womenshoesdescription/womenshoesdescription.component';
import { MenjewellerypageComponent } from './pages/jewellery/men jewellery/menjewellerypage/menjewellerypage.component';
import { DescriptionComponent } from './pages/jewellery/men jewellery/description/description.component';
import { WomenjewellerypageComponent } from './pages/jewellery/women jewellery/womenjewellerypage/womenjewellerypage.component';
import { MenclothesComponent } from './pages/clothes/men clothes/menclothes/menclothes.component';
import { MenclothesdescriptionComponent } from './pages/clothes/men clothes/menclothesdescription/menclothesdescription.component';
import { WomenclothespageComponent } from './pages/clothes/women clothes/womenclothespage/womenclothespage.component';
import { WomenclothedescriptionComponent } from './pages/clothes/women clothes/womenclothedescription/womenclothedescription.component';

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
    PhotographerspageComponent,
    RentalspageComponent,
    MenshoesComponent,
    MenshoedescriptionComponent,
    WomenshoesComponent,
    WomenshoesdescriptionComponent,
    MenjewellerypageComponent,
    DescriptionComponent,
    WomenjewellerypageComponent,
    MenclothesComponent,
    MenclothesdescriptionComponent,
    WomenclothespageComponent,
    WomenclothedescriptionComponent
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
