import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './module/main/containers/main/main.component';
import {AdminComponent} from './module/admin/containers/admin/admin.component';


const routes: Routes = [
  { path: 'login', component: AdminComponent },
  { path: 'dashboard', component: MainComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
