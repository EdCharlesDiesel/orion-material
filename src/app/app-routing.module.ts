import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockMarketEconomicCalendarComponent } from './stock-market-economic-calendar/stock-market-economic-calendar.component';
import { accountGuard } from './core/auth/guards/account.guard';
import { authGuard } from './core/auth/guards/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },    
  {
    path: 'login', 
    loadComponent: () => import('./core/auth/login/pages/login-page/login-page.component')
    .then(mod => mod.LoginPage),
    canActivate: [accountGuard]
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
    canActivate: [authGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./core/auth/register/register.component').then(mod => mod.RegisterComponent),
    canActivate: [accountGuard]
  },
  { path: 'dashboard', component: DashboardComponent, title: "Dashboard" },
  { path: 'calendar', component: StockMarketEconomicCalendarComponent, title: "Calendar" },  
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
