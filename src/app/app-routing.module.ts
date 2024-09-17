import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockMarketEconomicCalendarComponent } from './stock-market-economic-calendar/stock-market-economic-calendar.component';
import { accountGuard } from './_security/guards/account.guard';
import { authGuard } from './_security/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './_security/login/login.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },    
  { path: '',component:HomeComponent },  
  { path: 'home',component:HomeComponent, canActivate: [authGuard] },    
  { path: 'login', component:LoginComponent, canActivate: [accountGuard] },
  { path: 'dashboard', component: DashboardComponent, title: "Dashboard",  },
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
