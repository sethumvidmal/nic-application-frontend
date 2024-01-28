import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NicTableComponent } from './components/nic-table/nic-table.component';
import { UploadNewCsvComponent } from './pages/upload-new-csv/upload-new-csv.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: "all-nics",
    component: NicTableComponent
  },
  {
    path: "upload-new",
    component: UploadNewCsvComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
