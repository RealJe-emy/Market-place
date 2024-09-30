import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Authentication/landing/landing.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';

const routes: Routes = [
  {path:'', component: LandingComponent},
  {path: 'landing', component: LandingComponent},
 {path:'login', component: LoginComponent},
  {path:'Registration', component: RegistrationComponent},
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
