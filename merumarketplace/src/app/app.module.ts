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
import { ElectronicspageComponent } from './pages/Electronics/electronicspage/electronicspage.component';
import { ElectronicsdescriptionComponent } from './pages/Electronics/electronicsdescription/electronicsdescription.component';
import { FurnituredescriptionComponent } from './pages/Furniture/furnituredescription/furnituredescription.component';
import { SecondhanddescriptionComponent } from './pages/SecondHand/secondhanddescription/secondhanddescription.component';
import { SecondhandpageComponent } from './pages/SecondHand/secondhandpage/secondhandpage.component';
import { LaundryserviceComponent } from './pages/Laundry/laundryservice/laundryservice.component';
import { LaundrydescriptionComponent } from './pages/Laundry/laundrydescription/laundrydescription.component';
import { WifiserviceComponent } from './pages/WiFi/wifiservice/wifiservice.component';
import { WifidescriptionComponent } from './pages/WiFi/wifidescription/wifidescription.component';
import { GasserviceComponent } from './pages/Gas/gasservice/gasservice.component';
import { GasdescriptionComponent } from './pages/Gas/gasdescription/gasdescription.component';
import { GamingpageComponent } from './pages/Gaming/gamingpage/gamingpage.component';
import { GamingdescriptionComponent } from './pages/Gaming/gamingdescription/gamingdescription.component';

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
    SecondhandpageComponent,
    LaundryserviceComponent,
    LaundrydescriptionComponent,
    WifiserviceComponent,
    WifidescriptionComponent,
    GasserviceComponent,
    GasdescriptionComponent,
    GamingpageComponent,
    GamingdescriptionComponent
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
