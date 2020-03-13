import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './containers/main/main.component';
import {GetDataService} from './services/get-data/get-data.service';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {SearchListComponent} from './components/search-list/search-list.component';
import {SetClickDirective} from './directive/set-click.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContentService} from '../shared/services/content.service';

@NgModule({
  declarations: [
    MainComponent,
    SearchListComponent,
    SetClickDirective
  ],
  exports: [
    MainComponent,
    SearchListComponent,
    SetClickDirective
  ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      BrowserAnimationsModule
    ],
  providers: [
    GetDataService,
    ContentService
  ]
})

export class MainModule { }
