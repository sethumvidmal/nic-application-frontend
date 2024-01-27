import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NicTableComponent } from './components/nic-table/nic-table.component';
import { UploadNewCsvComponent } from './pages/upload-new-csv/upload-new-csv.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    NicTableComponent,
    UploadNewCsvComponent,
    DashboardComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
