import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputSearchComponent} from './input/input-search/input-search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchBoxComponent} from './search/search-box/search-box.component';
import {SetStyleDirective} from './directives/set-width/set-style.directive';

@NgModule({
  declarations: [
    InputSearchComponent,
    SearchBoxComponent,
    SetStyleDirective
  ],
  exports: [
    InputSearchComponent,
    SearchBoxComponent,
    SetStyleDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
