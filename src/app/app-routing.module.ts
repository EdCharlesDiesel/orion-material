import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockMarketEconomicCalendarComponent } from './stock-market-economic-calendar/stock-market-economic-calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  // { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, title: "Dashboard" },
  { path: 'calendar', component: StockMarketEconomicCalendarComponent, title: "Calendar" },
  { path: 'register', component: RegisterComponent },
  {
    path: 'login',
    //loadComponent: () => import('../app/core/auth/login/pages/login-page.component')
    loadComponent: () => import('./core/auth/login/pages/login-page/login-page.component')
      .then(mod => mod.LoginPage),
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
