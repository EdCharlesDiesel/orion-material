import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockMarketEconomicCalendarComponent } from './components/stock-market-economic-calendar/stock-market-economic-calendar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '',component:HomeComponent },  
  { path: 'home',component:HomeComponent, title: "Home"},    
  { path: 'login', component:LoginComponent, title: "Login"},
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
