import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './containers/main/main.component';
import { GetDataService } from './services/get-data/get-data.service';
import { SharedModule } from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule
    ],
  providers: [
    GetDataService
  ]
})

export class MainModule { }
