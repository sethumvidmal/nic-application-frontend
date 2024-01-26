import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NicTableComponent } from './components/nic-table/nic-table.component';
import { UploadNewCsvComponent } from './pages/upload-new-csv/upload-new-csv.component';

const routes: Routes = [
  {
    path:"all-nics",
    component:NicTableComponent
  },
  {
    path:"upload-new",
    component:UploadNewCsvComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
