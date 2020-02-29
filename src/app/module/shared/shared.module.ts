import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input/input-search/input-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchBoxComponent } from './search/search-box/search-box.component';

@NgModule({
  declarations: [
    InputSearchComponent,
    SearchBoxComponent
  ],
  exports: [
    InputSearchComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
