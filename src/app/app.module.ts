import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AboutComponent } from './about/about.component';
import { ToolbarTopMenuComponent } from './layouts/toolbar/toolbar-top-menu/toolbar-top-menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { StockMarketEconomicCalendarComponent } from './components/stock-market-economic-calendar/stock-market-economic-calendar.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { JwtInterceptor } from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ToolbarTopMenuComponent,    
    HomeComponent,
    DashboardComponent,        
    LoginComponent       
  ],
  imports: [
    CommonModule,
    FlexLayoutModule ,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,   
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StockMarketEconomicCalendarComponent
],  
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
