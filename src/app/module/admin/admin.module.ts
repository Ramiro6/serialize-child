import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './containers/admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    // CommonModule
  ]
})
export class AdminModule { }
