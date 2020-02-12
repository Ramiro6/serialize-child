import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './containers/main/main.component';
import { GetDataService } from './services/get-data/get-data.service';
@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [ CommonModule ],
  providers: [
    GetDataService
  ]
})

export class MainModule { }
