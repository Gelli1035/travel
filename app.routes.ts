import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { RegisterComponent } from './register/register.component'; // Import RegisterComponent
import { LoginComponent } from './login/login.component'; // Import LoginComponent

const routes: Routes = [
  { path: '', component: HomeComponent }, // Route for HomeComponent
  { path: 'register', component: RegisterComponent }, // Route for RegisterComponent
  { path: 'login', component: LoginComponent } // Route for LoginComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

