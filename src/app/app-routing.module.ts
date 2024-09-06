import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'dashboard', component: DashboardComponent, title: "Dashboard" },
  // { path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop" },
  // { path: 'sign-in', component: SignInComponent },
  // { path: 'form-controls', component: TemplateFormControlsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
