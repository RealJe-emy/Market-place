import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';  // Import FormsModule here


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
    DrinksdescriptionpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
