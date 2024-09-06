import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule  } from '@angular/material/table';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatFormFieldModule   } from '@angular/material/form-field';
import { MatInputModule   } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AboutComponent } from './about/about.component';
import { ToolbarTopMenuComponent } from './layouts/toolbar/toolbar-top-menu/toolbar-top-menu.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ToolbarTopMenuComponent,
    HumanResourcesComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatBadgeModule,
    MatTableModule, 
    MatCheckboxModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatListModule,
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    FormsModule
  ],  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
