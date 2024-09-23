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
import { DescriptionpageComponent } from './pages/descriptionpage/descriptionpage.component';
import { KitchenpageComponent } from './pages/kitchen/kitchenpage/kitchenpage.component';
import { KitchendescriptionComponent } from './pages/kitchen/kitchendescription/kitchendescription.component';
import { FurnitureComponent } from './pages/furniture/furniture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingComponent,
    RegistrationComponent,
    ProductspageComponent,
    DescriptionpageComponent,
    KitchenpageComponent,
    KitchendescriptionComponent,
    FurnitureComponent
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
